import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState();
    const [statusType, setStatusType] = useState('warning');

    useEffect(() => {
        document.title = 'Get In Touch | Chris Centrella';
    }, []);

    // Load reCaptcha script functions
    useEffect(() => {
        const recaptchaScript = document.createElement('script');
        recaptchaScript.src =
            'https://www.google.com/recaptcha/api.js?render=' + RECAPTCHA_SITE_KEY_V3;
        recaptchaScript.async = true;
        document.body.appendChild(recaptchaScript);

        return () => {
            document.body.removeChild(recaptchaScript);
        };
    }, []);

    function resetForm() {
        setName('');
        setEmail('');
        setMessage('');
    }

    function isValid() {
        document.getElementById('contact-form').reportValidity();
        return document.getElementById('contact-form').checkValidity();
    }

    function submit(token) {
        const contact = { name, email, message };

        fetch('/api/v1/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contact, 'g-recaptcha-response': token }),
        }).then((response) => {
            switch (response['status']) {
                case 200:
                    resetForm();
                    setStatusMessage('The message was sent successfully!');
                    setStatusType('success');
                    break;
                case 400:
                    setStatusMessage(
                        'Verification failed. Please ensure all fields are properly filled in, and try again.'
                    );
                    setStatusType('warning');
                    break;
                default:
                    setStatusMessage(
                        "That's not you; it's us. A system error prevented us from successfully sending your message."
                    );
                    setStatusType('error');
                    break;
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid()) {
            return;
        }

        grecaptcha.ready(function () {
            grecaptcha
                .execute(RECAPTCHA_SITE_KEY_V3, { action: 'submit' })
                .then(function (token) {
                    submit(token);
                });
        });
    };

    const statusMessageEl = (
        <>
            <div className="flash-container">
                <div className={'flash flash-' + statusType}>
                    <p>{statusMessage}</p>
                </div>
            </div>
            <br />
            <br />
        </>
    );

    return (
        <>
            <div className="container">
                <h1>Contact</h1>
                <p>
                    Thank you for visiting my website. You can reach out to me via the
                    form below.
                </p>
                <p>If you prefer to contact me via LinkedIn, you can use this link:</p>

                <div className="button-fixed-container top">
                    <a
                        className="button-fixed"
                        target="_blank"
                        href="https://linkedin.com/in/ccentrella">
                        LinkedIn Profile
                    </a>
                    <Link className="button-fixed" to="/">
                        View Homepage
                    </Link>
                </div>
            </div>

            {statusMessage != null && statusMessageEl}

            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    className="field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <textarea
                    placeholder="Message"
                    required
                    className="field field-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />

                <button
                    className="g-recaptcha field submit-button"
                    onClick={handleSubmit}>
                    Send Message
                </button>
            </form>
        </>
    );
}

export default Contact;
