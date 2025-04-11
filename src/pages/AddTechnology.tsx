import React, { useState } from 'react';

const AddTechnology: React.FC = () => {
  const [formData, setFormData] = useState({
    techName: '',
    category: '',
    status: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
    localStorage.setItem('technologies', JSON.stringify([...existingTechnologies, formData]));
    alert('Technology added successfully!');
    setFormData({ techName: '', category: '', status: '', details: '' });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#08103c] text-white">
      <h1 className="text-4xl font-bold mb-4">Add New Technology</h1>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="techName" className="block text-sm font-medium text-gray-300">Technology Name:</label>
          <input
            type="text"
            id="techName"
            name="techName"
            value={formData.techName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-300">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          >
            <option value="">Please select a status for this technology</option>
            <option value="In Development">In Development</option>
            <option value="Being Researched">Being Researched</option>
            <option value="Released">Released</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block text-sm font-medium text-gray-300">Details:</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Technology
        </button>
      </form>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.location.href = '/technology-list'}
          className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Back to Technology List
        </button>
      </div>
    </div>
  );
};

export default AddTechnology;