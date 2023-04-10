import React from 'react';
import Image from 'next/image';
import { useForm } from '@formcarry/react';
import s from './contactForm.module.scss';
import Arrow from '../../assets/contact/Arrow';

const ContactForm = () => {
    const { state, submit } = useForm({
        id: 'ciKTv3Pdnf',
    });

    if (state.submitted) {
        return <div>Thank you! I received your message.</div>;
    }

    return (
        <div className={s.box}>
            <div className={s.top}>
                <h1>
                    LET'S BUILD <span>A THING</span>
                </h1>
                <p>
                    Have some big idea or brand to develop and need help? Then reach out, I'd love
                    to hear about your project and provide help.
                </p>
            </div>

            <form className={s.form} onSubmit={submit}>
                <div className={s.name}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" />
                </div>
                <div className={s.email}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className={s.message}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" />
                </div>

                <button type="submit">
                    <Arrow />
                    Send Request
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
