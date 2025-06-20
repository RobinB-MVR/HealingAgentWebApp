import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const EditTechnology: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id') || '0';

  const [formData, setFormData] = useState({
    techName: '',
    category: '',
    status: '',
    details: '',
  });

  useEffect(() => {
    if (id) {
      const storedTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
      const tech = storedTechnologies.find((t: any, index: number) => index + 1 === parseInt(id));
      if (tech) {
        setFormData(tech);
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Math.random() < 0.5) {
      const confirmUpdate = window.confirm('Are you sure you want to update the technology?');
      if (!confirmUpdate) {
        return;
      }
    }
    const storedTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
    const updatedTechnologies = storedTechnologies.map((tech: any, index: number) =>
      index + 1 === parseInt(id) ? formData : tech
    );
    localStorage.setItem('technologies', JSON.stringify(updatedTechnologies));
    history.push('/technology-list');
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#08103c] text-white">
      <h1 className="text-4xl font-bold mb-4">Edit Technology</h1>
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
          Update Technology
        </button>
      </form>
    </div>
  );
};

export default EditTechnology;