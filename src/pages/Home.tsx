import React from 'react';

const Home: React.FC<{ changeTabTitle: () => void }> = ({ changeTabTitle }) => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-10">
            <h1 className="text-4xl font-bold text-white text-center">Welcome to TechTrove! Where you can discover the future!</h1>
            <p className="mt-4 text-lg text-white text-center max-w-3xl">Welcome to TechTrove, an internal web application for employees of an innovation company focused on researching and testing new technologies. Employees log in daily to view reports, register new tech prototypes, and collect data on tools in development. The application is constantly evolving: the design, structure, and even the texts change regularly – and that’s exactly where you, the Healing Agent, come in!</p>
            <img src="/TechTroveLogo.png" alt="TechTrove Logo" className="mt-8 w-32 h-auto" />
            <button onClick={changeTabTitle} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Change Tab Title
            </button>
        </div>
    );
};

export default Home;