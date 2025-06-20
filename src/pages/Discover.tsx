import React, { useState, useEffect } from 'react';

const Discover: React.FC = () => {
  const [inventors, setInventors] = useState<Array<{ firstName: string; lastName: string; yearOfBirth: number; greatestInvention: string }>>([]);

  useEffect(() => {
    const storedInventors = JSON.parse(localStorage.getItem('inventors') || '[]');
    setInventors(storedInventors);
  }, []);

  const handleRemove = (index: number) => {
    const updatedInventors = inventors.filter((_, i) => i !== index);
    setInventors(updatedInventors);
    localStorage.setItem('inventors', JSON.stringify(updatedInventors));
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Discover Inventors</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Year of Birth</th>
            <th className="border border-gray-300 px-4 py-2">Greatest Invention</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventors.map((inventor, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{inventor.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{inventor.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{inventor.yearOfBirth}</td>
              <td className="border border-gray-300 px-4 py-2">{inventor.greatestInvention}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discover;