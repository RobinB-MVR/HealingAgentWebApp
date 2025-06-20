import React, { useState } from 'react';

const Contribute: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [wrongButtonClicked, setWrongButtonClicked] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Contribute</h1>
      <p className="text-white">Wow! The Healing Agent has found the Contribute page!</p>
      <div className="flex space-x-4 mt-4">
        <button
          className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600"
          onClick={() => {
            setShowMessage(true);
            setWrongButtonClicked(false);
          }}
        >
          Click Me
        </button>
        {/* <button
          className="px-6 py-3 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white font-bold rounded-lg shadow-lg hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
          onClick={() => {
            setShowMessage(true);
            setWrongButtonClicked(true);
          }}
        >
          Don't Click Me
        </button> */}
      </div>
      {showMessage && (
        <div className="mt-6 p-6 bg-white text-black rounded-lg shadow-md">
          {wrongButtonClicked ? (
            <>
              <p className="text-lg font-semibold text-black">Oh no! You clicked the wrong button!</p>
              <p className="text-black">But hey, mistakes happen! Maybe try the other button next time?</p>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-black">Congratulations! You have found the correct contribute page!</p>
              <p className="text-black">You are so smart! Your curiosity and determination have brought you here, and we couldn't be more impressed. Keep up the amazing work!</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Contribute;