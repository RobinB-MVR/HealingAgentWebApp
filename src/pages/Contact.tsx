import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-white mb-8">We would love to hear from you!</p>
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="message" rows={4} required></textarea>
                </div>
                <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;