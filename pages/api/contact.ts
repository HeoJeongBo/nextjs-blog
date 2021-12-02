import { NextApiHandler } from 'next';
import { Db, MongoClient, ObjectId } from 'mongodb';

interface FormData {
    email: string;
    name: string;
    message: string;
    id?: ObjectId;
}

const handler: NextApiHandler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, name, message }: FormData = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid Input.' });
            return;
        }

        const newMessage: FormData = {
            email,
            name,
            message,
        };

        let client: MongoClient;

        try {
            client = await MongoClient.connect(
                'mongodb+srv://heojeongbo:Vrrhb3xsT0eOlDgK@cluster0.fa2lq.mongodb.net/my-site?retryWrites=true&w=majority'
            );
        } catch (err: any) {
            res.status(500).json({ message: 'Colud not connect to database' });
            return;
        }

        const db = client.db();

        try {
            const result = await db
                .collection('messages')
                .insertOne(newMessage);

            newMessage.id = result.insertedId;
        } catch (err) {
            client.close();
            res.status(500).json({ message: 'Storing message failed!' });

            return;
        }

        client.close();

        res.status(201).json({
            message: 'Successfully stores message!',
            data: newMessage,
        });
    }
};

export default handler;
