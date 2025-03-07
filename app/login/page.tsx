"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation (replace with actual authentication logic)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Login logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-4 bg-base-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
        {error && <div className="text-center text-red-500">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <a href="/" className="link link-primary">Don't have an account? Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;