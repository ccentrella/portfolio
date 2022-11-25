import React from "react";
import ImageBlock from "../ImageBlock";

function ComputerVisionSectionBlock({ src, alt, color }) {
    return (
        <div className="section-block transparent">
            <div className="section-block-image backdrop flex-col">
            <ImageBlock src="/assets/specialties-cv.png" alt="computer vision app drawing" color="#5190AC" />
            </div>
            <div className="section-block-content backdrop flex-col">
                <h2 className="button-label">Computer Vision</h2>
                <p>The computer vision industry is especially fascinating to me, because it allows me to combine my love for visuals with cutting-edge innovation. Most of my study in artificial intelligence, was based specifically on computer vision, and I implemented these concepts in Keras and TensorFlow, running simulations on my desktop computer, tweaking the AI model settings (known as the hyperparameters), and comparing the results.</p>
                <p>This past spring, I wrote an “Introduction to Modern Convolutional Networks” for my college thesis. I discussed an overview of my knowledge of computer vision, as well as several strategies to improve the performance of convolutional neural networks, which are at the heart of computer vision, and finally some of the latest industry experiments.</p>
            </div>
        </div>
    );
}

export default ComputerVisionSectionBlock;
