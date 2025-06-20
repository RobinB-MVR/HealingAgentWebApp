import React, { useState, useEffect } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const UsernameInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ id, ...props }) => {
  return <input {...props} id={id} />;
};

const PasswordInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ id, ...props }) => {
  return <input {...props} id={id} />;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordFirst, setIsPasswordFirst] = useState(false);
  const [buttonText, setButtonText] = useState('Login');
  const [isButtonAbove, setIsButtonAbove] = useState(false);
  const [usernameId, setUsernameId] = useState('username');
  const [passwordId, setPasswordId] = useState('password');

  useEffect(() => {
    setIsPasswordFirst(Math.random() < 0.5);
    setButtonText(Math.random() < 0.5 ? 'Login' : 'Submit');
    setIsButtonAbove(Math.random() < 0.5);
    setUsername('');
    setPassword('');
  }, []);

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

  const changeIds = () => {
    const isDefault = usernameId === 'username' && passwordId === 'password';

    if (isDefault) {
      setUsernameId('gebruikersnaam');
      setPasswordId('wachtwoord');
    } else {
      setUsernameId('username');
      setPasswordId('password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#08103c] text-white pt-10">
      <button
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={changeIds}
      >
        Change IDs
      </button>
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p className="text-lg mb-8">Please log in to access your account</p>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        {isButtonAbove && (
          <button
            className="w-full bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mb-4"
            type="submit"
          >
            {buttonText}
          </button>
        )}
        {isPasswordFirst ? (
          <>
            <div className="mb-4 flex items-center">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300" htmlFor={passwordId}>Password</label>
                <PasswordInput
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
                  type="password"
                  id={passwordId}
                  name="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>
              <span className="ml-4 text-sm text-gray-400">ID: {passwordId}</span>
            </div>
            <div className="mb-4 flex items-center">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300" htmlFor={usernameId}>Username</label>
                <UsernameInput
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
                  type="text"
                  id={usernameId}
                  name="login-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="new-username"
                  required
                />
              </div>
              <span className="ml-4 text-sm text-gray-400">ID: {usernameId}</span>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 flex items-center">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300" htmlFor={usernameId}>Username</label>
                <UsernameInput
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
                  type="text"
                  id={usernameId}
                  name="login-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="new-username"
                  required
                />
              </div>
              <span className="ml-4 text-sm text-gray-400">ID: {usernameId}</span>
            </div>
            <div className="mb-4 flex items-center">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300" htmlFor={passwordId}>Password</label>
                <PasswordInput
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
                  type="password"
                  id={passwordId}
                  name="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>
              <span className="ml-4 text-sm text-gray-400">ID: {passwordId}</span>
            </div>
          </>
        )}
        {!isButtonAbove && (
          <button
            className="w-full bg-[#b52274] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4"
            type="submit"
          >
            {buttonText}
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;