"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '../actions/userController';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Example validation (you can replace this with your own logic)
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Register logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-4 bg-base-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-primary">Register</h2>
        {error && <div className="text-center text-red-500">{error}</div>}
        <form action={register} className="space-y-4">
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
          <div className="form-control">
            <label htmlFor="confirmPassword" className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Register
          </button>
        </form>
        <div className="text-center">
          <a href="/login" className="link link-primary">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};