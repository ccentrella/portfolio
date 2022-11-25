import React, { useEffect, useState } from 'react';

function BlogEditor() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [slug, setSlug] = useState('');
    const [userId, setUserId] = useState();

    const [statusMessage, setStatusMessage] = useState();
    const [statusType, setStatusType] = useState('warning');
    const [editorType, setEditorType] = useState('create');

    useEffect(() => {
        document.title = 'New Blog Post | Chris Centrella';
    });

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

    function isValid() {
        document.getElementById('contact-form').reportValidity();
        return document.getElementById('contact-form').checkValidity();
    }

    function submit(token) {
        const post = {
            title,
            content,
            description,
            featured_image: featuredImage,
            category,
            tags,
            slug,
            user_id: userId,
        };

        fetch('/api/v1/blog/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post, 'g-recaptcha-response': token }),
        }).then((response) => {
            switch (response['status']) {
                case 200:
                    setStatusMessage('Post created successfully!');
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

    const form = (
        <form className="create-post-form">
            <div className="container">
                <div className="button-fixed-container create-post-button-container">
                    <button className="g-recaptcha button-fixed" onClick={handleSubmit}>
                        Publish
                    </button>
                </div>
                <textarea
                    required
                    placeholder="Title"
                    className="create-post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></textarea>
                <br />

                <textarea
                    required
                    placeholder="Start typing here..."
                    className="create-post-content post-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}></textarea>
                <br />
            </div>
            <div className="contact-form">
                <div className="container form-container">
                    <h2>Options</h2>
                    <textarea
                        placeholder="Description"
                        className="field create-post-description'"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    <br />

                    <input
                        type="url"
                        placeholder="Featured Image (Not Yet Supported)"
                        className="field"
                        value={featuredImage}
                        onChange={(e) => setFeaturedImage(e.target.value)}
                    />
                    <br />

                    <input
                        placeholder="Category"
                        className="field"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <br />

                    <input
                        placeholder="Tags"
                        className="field"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <br />

                    <input
                        placeholder="Slugs"
                        className="field"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                    <br />

                    <select
                        className="field"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}>
                        <option>Select User</option>
                    </select>
                </div>
            </div>
            <div className="button-fixed-container top bottom thin">
                <button className="g-recaptcha button-fixed" onSubmit={handleSubmit}>
                    Publish
                </button>
                {editorType === 'edit' && (
                    <button className="button-fixed red">Delete</button>
                )}
            </div>
        </form>
    );

    return (
        <>
            {statusMessage != null && statusMessageEl}
            {form}
        </>
    );
}

export default BlogEditor;
