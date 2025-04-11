import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-center max-w-xl">
                This is the about page of our modern, minimal React application. Here you can find information about our mission and values.
            </p>
        </div>
    );
};

export default About;