import React, { useEffect, useState } from 'react';
import { Link, useParams, redirect } from 'react-router-dom';

function Unsubscribe() {
    const [statusMessage, setStatusMessage] = useState();
    const [statusType, setStatusType] = useState('warning');
    const [accountExists, setAccountExists] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        document.title = 'Unsubscribe | Chris Centrella';
    }, []);

    useEffect(() => {
        fetch('/api/v1/subscribers/' + id + '/edit', {
            method: 'GET',
        }).then((response) => {
            if (response['status'] === 404) {
                setAccountExists(false);
                setStatusMessage(
                    'This account does not exist. If you recently unsubscribed, ' +
                        'you should no longer receive emails within 7-10 days.'
                );
                setStatusType('warning');
            }
        });
    }, []);

    function submit() {
        fetch('/api/v1/subscribers/' + id, {
            method: 'DELETE',
        }).then((response) => {
            switch (response['status']) {
                case 200:
                    setStatusMessage('You have unsubscribed successfully.');
                    setStatusType('success');
                    setAccountExists(false);
                    break;
                case 404:
                    setStatusMessage(
                        'This account does not exist. If you recently unsubscribed, ' +
                            'you should no longer receive emails within 7-10 days.'
                    );
                    setStatusType('warning');
                    break;
                default:
                    setStatusMessage(
                        "That's not you; it's us. A system error prevented us " +
                            'from completing your unsubscription request.'
                    );
                    setStatusType('error');
                    break;
            }
        });
    }

    const statusMessageEl = (
        <>
            <div className="flash-container">
                <div className={'flash flash-' + statusType}>
                    <p>{statusMessage}</p>
                </div>
            </div>
        </>
    );

    const unsubscribeEl = (
        <div className="contact-form">
            <div className="container form-container">
                <p>
                    <strong>
                        By unsubscribing, you will no longer receive emails from this
                        website.
                    </strong>{' '}
                    Are you sure you would like to unsubscribe?
                </p>
            </div>

            <div className="button-fixed-container bottom">
                <button onClick={submit} className="button-fixed submit-button">
                    Yes, unsubscribe me
                </button>

                <Link to="/blog" className="button-fixed submit-button highlight">
                    No, please don't!
                </Link>
            </div>
        </div>
    );

    const blogHomepageEl = (
        <div className="button-fixed-container top bottom">
            <Link to="/blog" className="button-fixed">
                Blog Homepage
            </Link>
        </div>
    );

    return (
        <>
            {statusMessage != null && statusMessageEl}

            <div className="container">
                <h1>Unsubscribe</h1>
                {!accountExists && blogHomepageEl}
            </div>

            {accountExists && unsubscribeEl}
        </>
    );
}

export default Unsubscribe;
