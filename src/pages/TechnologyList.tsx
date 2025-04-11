import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TechnologyList: React.FC = () => {
  const [technologies, setTechnologies] = useState<Array<{ id: number; techName: string; category: string; status: string; details: string }>>([]);

  useEffect(() => {
    const storedTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
    setTechnologies(storedTechnologies.map((tech: any, index: number) => ({ id: index + 1, ...tech })));
  }, []);

  const handleRemove = (id: number) => {
    const updatedTechnologies = technologies.filter((tech) => tech.id !== id);
    const recalculatedTechnologies = updatedTechnologies.map((tech, index) => ({ ...tech, id: index + 1 }));
    setTechnologies(recalculatedTechnologies);
    localStorage.setItem('technologies', JSON.stringify(recalculatedTechnologies));
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Technology List</h1>
      <table className="table-auto w-full border-collapse border border-[#2b98ea]">
        <thead>
          <tr className="bg-[#b52274] text-white">
            <th className="border border-[#2b98ea] px-4 py-2">Name</th>
            <th className="border border-[#2b98ea] px-4 py-2">Category</th>
            <th className="border border-[#2b98ea] px-4 py-2">Status</th>
            <th className="border border-[#2b98ea] px-4 py-2">Details</th>
            <th className="border border-[#2b98ea] px-4 py-2">Edit</th>
            <th className="border border-[#2b98ea] px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((tech) => (
            <tr key={tech.id} className="text-center bg-[#08103c] text-white hover:bg-[#2b98ea]">
              <td className="border border-[#2b98ea] px-4 py-2">{tech.techName}</td>
              <td className="border border-[#2b98ea] px-4 py-2">{tech.category}</td>
              <td className="border border-[#2b98ea] px-4 py-2">{tech.status}</td>
              <td className="border border-[#2b98ea] px-4 py-2">
                <Link
                  to={`/details?id=${tech.id}`}
                  className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-[#a01767]"
                >
                  Show Details
                </Link>
              </td>
              <td className="border border-[#2b98ea] px-4 py-2">
                <Link
                  to={`/edit-technology?id=${tech.id}`}
                  className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-[#a01767]"
                >
                  Edit Technology
                </Link>
              </td>
              <td className="border border-[#2b98ea] px-4 py-2">
                <button
                  onClick={() => handleRemove(tech.id)}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.location.href = '/add-technology'}
          className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Add New Technology
        </button>
      </div>
    </div>
  );
};

export default TechnologyList;