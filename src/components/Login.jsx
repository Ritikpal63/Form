import React, { useState } from 'react';
import { Apple, User, KeyRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('user')) || [];

    const user = storedUsers.find(u => u.email === email && u.password === password);

    if (user) {
      alert('Login successful!');
      if (onLogin) onLogin();
      navigate('/dashboard')
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <div className="card shadow w-96 p-10 bg-white rounded-lg">
        <h2 className="text-center text-lime-600 font-medium text-2xl pt-2 rounded-sm mb-8">Sign In</h2>
        <form onSubmit={handleLogin} className=''>
          <div className="mb-3 flex">
            <span className='flex items-center border border-gray-300 px-3 rounded-l-md bg-stone-50 border-r-0'>
              <User size={"20px"} className='text-lime-600' />
            </span>
            <input
              type="email"
              className="w-full px-2 py-2 border border-gray-300 rounded-r-md
         focus:outline-none focus:ring-2 focus:ring-lime-200"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 flex">
            <span className='flex items-center border border-gray-300 px-3 rounded-l-md bg-stone-50 border-r-0'>
              <KeyRound size={"20px"} className='text-lime-600' />
            </span>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-r-md
         focus:outline-none focus:ring-2 focus:ring-lime-200"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="#" className='block text-center my-2 text-lime-600 hover:text-lime-700 hover:underline'>Forget password?</a>
          <button type="submit" className="w-full bg-lime-700 text-white py-2 rounded-md
         hover:bg-lime-600 transition font-medium">
            Continue
          </button>
        </form>
        <div className='flex justify-center items-center gap-1 text-gray-500 py-4'>
          <div className='h-px w-12 bg-gray-300'></div>
          <span className="text-sm">Don't have an account?</span>
          <div className='h-px w-12 bg-gray-300'></div>
        </div>
        <div className="">
          <Link to="/signup" className='block w-full text-center bg-stone-200 text-lime-700 py-2 rounded-md
         hover:bg-stone-300 transition my-1 font-medium'>Create an account</Link>
          <button type="button" className='w-full flex justify-center gap-2 items-center bg-stone-200 text-lime-700 py-2 rounded-md my-1
         hover:bg-stone-300 transition cursor-pointer font-medium'> <Apple size={"20px"} /> Sign in with Apple</button>
          <button type="button" className='w-full bg-stone-200 text-lime-700 py-2 rounded-md my-1
         hover:bg-stone-300 transition cursor-pointer font-medium'>Sign in with Google</button>
        </div>
      </div>
    </div >
  );
};

export default Login;