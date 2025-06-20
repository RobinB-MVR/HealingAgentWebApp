import React, { useState } from 'react';

const AddTechnology: React.FC = () => {
  const [formData, setFormData] = useState({
    techName: '',
    category: '',
    status: '',
    details: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isDutch, setIsDutch] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'techName' && value.length >= 3 && 'Robotic Process Automation'.toLowerCase().startsWith(value.toLowerCase())) {
      setFormData({ ...formData, [name]: 'Robotic Process Automation' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Math.random() < 0.5) {
      setShowModal(true);
      return;
    }
    saveTechnology();
  };

  const saveTechnology = () => {
    const existingTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
    localStorage.setItem('technologies', JSON.stringify([...existingTechnologies, formData]));
    window.location.href = '/technology-list';
  };

  const handleModalConfirm = (confirm: boolean) => {
    setShowModal(false);
    if (confirm) {
      saveTechnology();
    }
  };

  const toggleLanguage = () => {
    setIsDutch((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#08103c] text-white">
      <h1 className="text-4xl font-bold mb-4">{isDutch ? 'Nieuwe Technologie Toevoegen' : 'Add New Technology'}</h1>
      <button
        onClick={toggleLanguage}
        className="mb-4 py-4 px-2 rounded-lg font-bold flex items-center justify-center"
        style={{ background: 'none', color: 'black', width: '150px', height: '90px', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ backgroundColor: '#ED2939', width: '100%', height: '33%' }}></div>
        <div style={{ backgroundColor: '#FFFFFF', width: '100%', height: '33%' }}></div>
        <div style={{ backgroundColor: '#002395', width: '100%', height: '33%' }}></div>
        <span style={{ position: 'absolute', fontSize: '12px' }}>{isDutch ? 'Verander naar Engels' : 'Switch to Dutch'}</span>
      </button>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="techName" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Technologie Naam:' : 'Technology Name:'}
          </label>
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
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Categorie:' : 'Category:'}
          </label>
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
          <label htmlFor="status" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Status:' : 'Status:'}
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            required
          >
            <option value="">{isDutch ? 'Selecteer een status voor deze technologie' : 'Please select a status for this technology'}</option>
            <option value="In Development">{isDutch ? 'In Ontwikkeling' : 'In Development'}</option>
            <option value="Being Researched">{isDutch ? 'Wordt Onderzocht' : 'Being Researched'}</option>
            <option value="Released">{isDutch ? 'Uitgebracht' : 'Released'}</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block text-sm font-medium text-gray-300">
            {isDutch ? 'Details:' : 'Details:'}
          </label>
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
          {isDutch ? 'Technologie Toevoegen' : 'Add Technology'}
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md">
            <p>{isDutch ? 'Weet je zeker dat je deze technologie wilt toevoegen?' : 'Are you sure you want to add this technology?'}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleModalConfirm(false)}
                className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
              >
                {isDutch ? 'Annuleren' : 'Cancel'}
              </button>
              <button
                onClick={() => handleModalConfirm(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                {isDutch ? 'Bevestigen' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.location.href = '/technology-list'}
          className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {isDutch ? 'Terug naar Technologie Lijst' : 'Back to Technology List'}
        </button>
      </div>
    </div>
  );
};

export default AddTechnology;