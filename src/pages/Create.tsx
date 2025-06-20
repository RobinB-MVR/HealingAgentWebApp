import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    yearOfBirth: '',
    greatestInvention: ''
  });

  const [isDutch, setIsDutch] = useState(false);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(Number(formData.yearOfBirth))) {
      alert('Year of Birth must be a number');
      return;
    }
    const existingInventors = JSON.parse(localStorage.getItem('inventors') || '[]');
    localStorage.setItem('inventors', JSON.stringify([...existingInventors, formData]));
    history.push('/discover');
  };

  const toggleLanguage = () => {
    setIsDutch((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#08103c] text-white">
      <h1 className="text-4xl font-bold mb-4">Create Inventor</h1>
      <button
        onClick={toggleLanguage}
        className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Change Anchors
      </button>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Voornaam' : 'First Name'}:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Achternaam' : 'Last Name'}:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="yearOfBirth" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Geboortejaar' : 'Year of Birth'}:
          </label>
          <input
            type="text"
            id="yearOfBirth"
            name="yearOfBirth"
            value={formData.yearOfBirth}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="greatestInvention" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Grootste Uitvinding' : 'Greatest Invention'}:
          </label>
          <textarea
            id="greatestInvention"
            name="greatestInvention"
            value={formData.greatestInvention}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;