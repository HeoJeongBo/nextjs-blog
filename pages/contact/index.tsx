import Head from 'next/head';
import { NextPage } from 'next';
import ContactForm from '../../components/contact/contact-form';
import { Fragment } from 'react';

const ContactPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Sending your messages" />
            </Head>
            <ContactForm />
        </Fragment>
    );
};

export default ContactPage;
