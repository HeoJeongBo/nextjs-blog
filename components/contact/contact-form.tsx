import { useEffect, useState } from 'react';
import Notification from '../ui/notification';

import classes from './contact-form.module.css';

type RequestStatus = 'pending' | 'success' | 'error' | null;
type FormData = {
    email: string;
    name: string;
    message: string;
};

interface NotificationData {
    status: RequestStatus;
    title: string;
    message: string;
}

const sendContactData = async (formData: FormData) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong !');
    }
};

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [requestStatus, setRequestStatus] = useState<RequestStatus>(null);
    const [requestError, setRequestError] = useState<string>('');

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('send Message !!');
        e.preventDefault();

        setRequestStatus('pending');
        try {
            await sendContactData({
                email,
                message,
                name,
            });
            setRequestStatus('success');
            setEmail('');
            setName('');
            setMessage('');
        } catch (err: any) {
            setRequestError(err.message);
            setRequestStatus('error');
        }
    };

    let notification: NotificationData | null = null;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message....',
            message: 'Your message is on its way!',
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully',
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError,
        };
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessage}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && (
                <Notification
                    title={notification.title}
                    message={notification.message}
                    status={notification.status}
                />
            )}
        </section>
    );
};

export default ContactForm;
