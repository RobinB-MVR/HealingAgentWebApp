import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TechnologyList: React.FC = () => {
  const [technologies, setTechnologies] = useState<Array<{ id: number; techName: string; category: string; status: string; details: string }>>([]);
  const [isClickable, setIsClickable] = useState(false);
  const [columns, setColumns] = useState<string[]>(['Name', 'Category', 'Status', 'Details', 'Edit', 'Remove']);
  const [addButtonText, setAddButtonText] = useState('Add New Technology');
  const [currentTag, setCurrentTag] = useState('TABLE');

  useEffect(() => {
    const storedTechnologies = JSON.parse(localStorage.getItem('technologies') || '[]');
    setTechnologies(storedTechnologies.map((tech: any, index: number) => ({ id: index + 1, ...tech })));

    const tableSelector = document.querySelector("#technology-table");
    if (tableSelector) {
      const initialId = tableSelector.getAttribute('id');
      setCurrentTag(initialId || 'technology-table');
    }

    const timer = setTimeout(() => {
      setIsClickable(true);
    }, 20000); // Changed from 5000 to 20000

    return () => clearTimeout(timer);
  }, []);

  const handleTextChange = () => {
    const buttonTexts = ['Add New Technology', 'Create Technology', 'New Tech Entry'];
    const randomText = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
    setAddButtonText(randomText);
  };

  const handleRemove = (id: number) => {
    const updatedTechnologies = technologies.filter((tech) => tech.id !== id);
    const recalculatedTechnologies = updatedTechnologies.map((tech, index) => ({ ...tech, id: index + 1 }));
    setTechnologies(recalculatedTechnologies);
    localStorage.setItem('technologies', JSON.stringify(recalculatedTechnologies));
  };

  const shuffleColumns = () => {
    const shuffled = [...columns].sort(() => Math.random() - 0.5);
    setColumns(shuffled);
  };

  const handleChangeSelector = () => {
    console.log("Change Table Selector button clicked");
    const tableSelector = document.querySelector("#technology-table") || document.querySelector("#technologie-tabel");
    if (tableSelector) {
      const currentId = tableSelector.getAttribute('id');
      const newId = currentId === 'technology-table' ? 'technologie-tabel' : 'technology-table';
      console.log(`Table selector found, changing id to '${newId}'`);
      tableSelector.setAttribute('id', newId);
      setCurrentTag(newId);
    } else {
      console.log("Table selector not found");
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Technology List</h1>
      <p className="mb-4">Current Table ID: <span className="font-bold text-blue-500">{currentTag}</span></p>
      <button
        onClick={shuffleColumns}
        className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Shuffle Columns
      </button>
      <div className="flex justify-center mb-4" style={{ marginTop: '-4rem' }}>
        <button
          onClick={handleChangeSelector}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700"
        >
          Change Table Selector
        </button>
      </div>
      <table id="technology-table" className="table-auto w-full border-collapse border border-[#2b98ea]" data-tag="TABLE">
        <thead>
          <tr className="bg-[#b52274] text-white">
            {columns.map((column) => (
              <th key={column} className="border border-[#2b98ea] px-4 py-2">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {technologies.map((tech) => (
            <tr key={tech.id} className="text-center bg-[#08103c] text-white hover:bg-[#2b98ea]">
              {columns.map((column) => {
                switch (column) {
                  case 'Name':
                    return <td key={column} className="border border-[#2b98ea] px-4 py-2">{tech.techName}</td>;
                  case 'Category':
                    return <td key={column} className="border border-[#2b98ea] px-4 py-2">{tech.category}</td>;
                  case 'Status':
                    return <td key={column} className="border border-[#2b98ea] px-4 py-2">{tech.status}</td>;
                  case 'Details':
                    return (
                      <td key={column} className="border border-[#2b98ea] px-4 py-2">
                        <Link
                          to={`/details?id=${tech.id}`}
                          className={`bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-[#a01767] ${!isClickable ? 'pointer-events-none opacity-50' : ''}`}
                        >
                          Show Details
                        </Link>
                      </td>
                    );
                  case 'Edit':
                    return (
                      <td key={column} className="border border-[#2b98ea] px-4 py-2">
                        <Link
                          to={`/edit-technology?id=${tech.id}`}
                          className={`bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-[#a01767] ${!isClickable ? 'pointer-events-none opacity-50' : ''}`}
                        >
                          Edit Technology
                        </Link>
                      </td>
                    );
                  case 'Remove':
                    return (
                      <td key={column} className="border border-[#2b98ea] px-4 py-2">
                        <button
                          onClick={() => handleRemove(tech.id)}
                          className={`bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 ${!isClickable ? 'pointer-events-none opacity-50' : ''}`}
                          disabled={!isClickable}
                        >
                          Remove
                        </button>
                      </td>
                    );
                  default:
                    return null;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        {isClickable && (
          <button
            onClick={() => window.location.href = '/add-technology'}
            className="bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            {addButtonText}
          </button>
        )}
        <button
          onClick={handleTextChange}
          className="ml-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
        >
          Change Button Text
        </button>
      </div>
    </div>
  );
};

export default TechnologyList;