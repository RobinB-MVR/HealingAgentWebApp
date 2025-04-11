import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'HealingAgentTester' && password === 'UiPath') {
      console.log('Login successful');
      onLogin();
    } else {
      console.log('Invalid credentials');
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#08103c] text-white pt-10">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p className="text-lg mb-8">Please log in to access your account</p>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="username">Username</label>
          <input
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="password">Password</label>
          <input
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;