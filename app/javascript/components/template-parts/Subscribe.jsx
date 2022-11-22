import React, { useEffect, useState } from 'react';

function Subscribe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState();
    const [statusType, setStatusType] = useState('warning');

    // Load reCaptcha script functions
    useEffect(() => {
        const recaptchaScript = document.createElement('script');
        recaptchaScript.src =
            'https://www.google.com/recaptcha/api.js?render=6LeIoUMhAAAAAOG1PAaCD17aybc4JcxZEbhcWB8-';
        recaptchaScript.async = true;
        document.body.appendChild(recaptchaScript);

        return () => {
            document.body.removeChild(recaptchaScript);
        };
    }, []);

    function resetForm() {
        setName('');
        setEmail('');
    }

    function submit(token) {
        const subscriber = { name, email, message };

        fetch('/api/v1/subscribers/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subscriber, 'g-recaptcha-response': token }),
        }).then((response) => {
            switch (response['status']) {
                case 200:
                    resetForm();
                    setStatusMessage('Thank you for subscribing!');
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
                        "That's not you; it's us. A system error prevented us from completing your subscription request."
                    );
                    setStatusType('error');
                    break;
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha
                .execute('6LeIoUMhAAAAAOG1PAaCD17aybc4JcxZEbhcWB8-', { action: 'submit' })
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
            {statusMessage != null && statusMessageEl}

            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="container form-container">
                    <h2>Subscribe</h2>
                    <p>
                        Wanna learn more about the mighty work God is doing right now?
                        Subscribe to my blog!
                    </p>
                    <p>
                        I write for this purpose: That all men and women might see the
                        mighty works of God in our time through the eyes of faith, and
                        that one day everyone will experience the glory of God, alive in
                        the Church!
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Name (Optional)"
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
                <br />
                <button
                    className="g-recaptcha field submit-button"
                    onClick={handleSubmit}>
                    Subscribe Now!
                </button>
            </form>
        </>
    );
}

export default Subscribe;
