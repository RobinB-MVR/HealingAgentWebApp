import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 w-full fixed top-0 left-0 z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">TechTrove</div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;