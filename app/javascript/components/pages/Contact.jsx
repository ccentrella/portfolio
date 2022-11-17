import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function Contact() {

    useEffect(() => {
        document.title = "Get In Touch | Chris Centrella";
    }, []);

    useEffect(() => {
        <script src="https://www.google.com/recaptcha/api.js"></script>;

        function onSubmit(token) {
            document.getElementById("demo-form").submit();
        }
    }, []);

    return (
        <>
            <div className="container">
                <h1>Contact</h1>
                <p>Thank you for visiting my website. You can reach out to me via the form below.</p>
                <p>If you prefer to contact me via LinkedIn, you can use this link:</p>

                <div className="button-fixed-container">
                    <a className="button-fixed" target="_blank" href="https://linkedin.com/in/ccentrella">
                        LinkedIn Profile
                    </a>
                    <Link className="button-fixed" to="/">
                        View Homepage
                    </Link>
                </div>
            </div>

            {/* <%= render partial: "shared/error_messages", object: @email_contact %> */}
            <form method="post" action="/contact" className="contact-form">
                <input type="text" name="name" placeholder="Name" className="field" />
                <br />
                <input type="email" name="email" placeholder="Name" className="field" />
                <br />
                <textarea name="message" placeholder="Message" className="field field-message" />
                <br />
                <button className="g-recaptcha field submit-button" data-sitekey="reCAPTCHA_site_key" data-callback="onSubmit" data-action="submit">
                    Send Message
                </button>
                {/* <input type="submit" className="field submit-button" value="Send Message" /> */}
            </form>
            {/* 
            <% if @show_checkbox_recaptcha %>
                <%= recaptcha_tags noscript: false %>
            <% else %>
                <%= recaptcha_v3(action: 'contact', site_key: ENV['RECAPTCHA_SITE_KEY_V3']) %>
            <% end %>    
            */}
        </>
    );
}

export default Contact;
