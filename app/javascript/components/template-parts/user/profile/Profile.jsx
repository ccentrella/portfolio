import React from 'react';

function Profile() {
    return (
        <main>
            <div class="container">
                <h1 class="account-title">Welcome!</h1>
            </div>
            <div class="button-fixed-container-dark account-overview">
                <div class="container">
                    <h2>Overview</h2>
                </div>
                <div class="button-fixed-container top bottom">
                    <Link to="/blog/new" className="button-fixed">
                        Create Blog Post
                    </Link>
                    <Link to="/profile/edit" className="button-fixed">
                        Edit Profile
                    </Link>
                </div>
            </div>
            <div class="container">
                <h2>Blog</h2>
            </div>
            <div class="button-fixed-container-dark accent thin">
                <Link to="/blog/new" className="button-fixed">
                    Create Post
                </Link>
                <Link to="/blog?view=author" className="button-fixed">
                    View All Posts
                </Link>
            </div>
        </main>
    );
}

export default Profile;
