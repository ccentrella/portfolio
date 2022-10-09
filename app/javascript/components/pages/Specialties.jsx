import React from "react";
import ThesisBlock from "../template-parts/blocks/ThesisBlock";

function Specialties() {
    return (
        <>
            <div className="container">
                <p className="section-title">Specialties</p>
                <h2>UX Engineering</h2>
                <p className="large">
                    One of my favorite specialties in software engineering is UX
                    engineering, also known as User Experience Design. Creating
                    user interfaces has always fascinated me, and I’ve always
                    wanted to build rich, modern user interfaces. Since I began
                    programming, I’ve written over 10+ apps, most of them using
                    Windows Presentation Foundation or WPF, which is known for
                    its ability to create rich, user-oriented interfaces, with
                    more flexibility than CSS.
                </p>
                <p className="large">
                    More recently, I took it upon myself to take several classes
                    on LinkedIn on graphic design, so that I would have the
                    foundation to create refined, modern, user experiences.
                    Since then, I’ve been continually applying my skills in a
                    variety of ways, one of which is this portfolio website. I
                    designed this entire website from the ground up, prototyping
                    all of the designs in Adobe XD and then implementing them
                    with HTML and CSS.
                </p>

                <h2>Artificial Intelligence</h2>
                <p className="large">
                    We live in a changing world, a world with an increasing
                    amount of uncertainty, of complexity, and of misinformation.
                    These factors require new technologies to bring corporate
                    and consumer value. My interest in utilizing the latest
                    technologies and the most cutting-edge innovation demands
                    that I become acquainted with the latest and greatest
                    invention of human history.
                </p>
                <p className="large">
                    I first entered the AI field during the summer of 2021,
                    where I spent several months learning the fundamentals of
                    artificial intelligence; things like training, loss,
                    optimization and backpropagation. I learned these concepts
                    with a specific focus on their application in computer
                    vision, one of my favorite specialties.
                </p>

                <h2>Computer Vision</h2>
                <p className="large">
                    The computer vision industry is especially fascinating to
                    me, because it allows me to combine my love for visuals with
                    cutting-edge innovation. Most of my study in artificial
                    intelligence, was based specifically on computer vision, and
                    I implemented these concepts in Keras and TensorFlow,
                    running simulations on my desktop computer, tweaking the AI
                    model settings (known as the hyperparameters), and comparing
                    the results.
                </p>
                <p className="large">
                    This past spring, I wrote an “Introduction to Modern
                    Convolutional Networks” for my college thesis. I discussed
                    an overview of my knowledge of computer vision, as well as
                    several strategies to improve the performance of
                    convolutional neural networks, which are at teh heart of
                    computer vision, and finally some of the latest industry
                    experiments.
                </p>
            </div>
            <ThesisBlock />
        </>
    );
}

export default Specialties;
