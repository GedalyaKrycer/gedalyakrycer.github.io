import React, { Suspense, lazy } from 'react';
import './contact.css';
import Header from '../../components/ui/Header/Header';

const ContactForm = lazy(() => import('../../components/contact/ContactForm/ContactForm'));



function Contact() {
    return (
        <div className="g__footer-pin">
            <Header
                title="Contact"
                subTitleOne={`I bet we could build something great together.`}
            />

            <Suspense fallback={<div>Loading…</div>}>
                <ContactForm />

            </Suspense>

        </div>
    )
}


export default Contact;