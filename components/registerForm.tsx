"use client";

import React, { useState } from 'react';
import { register } from '../actions/userController';

// Define the shape of the errors object
interface Errors {
  email?: string;
  password?: string;
}

// Define the shape of the register function's response
interface RegisterResponse {
  success: boolean;
  errors?: Errors;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' });
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: '', password: '' }); // Reset errors
    setSuccess('');

    // Call the server action
    const response: RegisterResponse = await register(null, formData);

    if (response.success) {
      setSuccess('Registration successful!');
    } else {
      // Ensure errors object has both email and password properties
      setErrors({
        email: response.errors?.email || '',
        password: response.errors?.password || '',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-4 bg-base-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-primary">Register</h2>
        {errors.email &&
        <div role="alert" className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{errors.email}</span>
        </div>}
        {errors.password &&
          <div role="alert" className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{errors.password}</span>
        </div>}
        {success &&
          <div role="alert" className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{success}</span>
        </div>}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="text-center">
          <a href="/login" className="link link-primary">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;