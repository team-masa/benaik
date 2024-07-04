import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend logic goes here
    console.log('Form submitted:', { name, isTermsAgreed });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Link>
      
      <h2 className="text-2xl font-bold mt-4 mb-6">SignUp for BENAIK</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p className="mt-1 text-xs text-gray-500">Your name will be public on your event profile.</p>
        </div>

        <div className="mb-6">
          <div className="mt-1 flex items-center">
            <input
              type="checkbox"
              id="termsAgreement"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={isTermsAgreed}
              onChange={(e) => setIsTermsAgreed(e.target.checked)}
              required
            />
            <label htmlFor="termsAgreement" className="ml-2 block text-sm text-gray-700">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4338C9] hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign up
        </button>
      </form>

      <p className="mt-4 text-xs text-center text-gray-500">
        By signing up, you agree to our{' '}
        <Link to="/terms" className="text-blue-500 hover:underline">Terms of Service</Link>,{' '}
        <Link to="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>, and{' '}
        <Link to="/cookies" className="text-blue-500 hover:underline">Cookie Policy</Link>.
      </p>
    </div>
  );
};

export default SignUpForm;
