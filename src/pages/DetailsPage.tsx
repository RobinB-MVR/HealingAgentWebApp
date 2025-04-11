import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const [technology, setTechnology] = useState<{ techName: string; category: string; status: string; details: string } | null>(null);

  useEffect(() => {
    if (id) {
      const storedTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
      const tech = storedTechnologies.find((t: any, index: number) => index + 1 === parseInt(id));
      setTechnology(tech || null);
    }
  }, [id]);

  return (
    <div className="container mx-auto py-6">
      {technology ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{technology.techName}</h1>
          <p className="mb-2"><strong>Category:</strong> {technology.category}</p>
          <p className="mb-2"><strong>Status:</strong> {technology.status}</p>
          <p><strong>Details:</strong> {technology.details}</p>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => window.location.href = '/technology-list'}
              className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Back to Technology List
            </button>
          </div>
        </>
      ) : (
        <p>Technology details not found.</p>
      )}
    </div>
  );
};

export default DetailsPage;