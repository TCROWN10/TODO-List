import React, {useState} from 'react'
import { Link } from "react-router-dom";

const  Login= () => {

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // Simulate sign-in API call here
      console.log('Form submitted', formData);
      setError('');
      // You can also redirect to the next page after a successful sign-in
    } else {
      setError('Please fill in all fields');
    }
  };
  return (
    <div className='bg-[rgb(43,62,101)] flex flex-col justify-center items-center min-h-screen p-4'>

      {/* Header Text */}
      <h2 className='text-2xl font-semibold mb-4 text-white'>
        TCROWN
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md border'>
        {/* Email Input */}
        <label htmlFor='email' className='text-sm font-medium block mb-1'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          className='w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Email Address'
          value={formData.email}
          onClick={handleChange}
          required
          
        />

        {/* Password Input */}
        <label htmlFor='password' className='text-sm font-medium block mb-1'>
          Password
        </label>
        <input
          type='password'
          id='password'
          className='w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Password'
          value={formData.password}
          onClick={handleChange}
          required
        />

        {/* Remember Me Checkbox */}
        <div className='flex items-center mb-4'>
          <input
            type='checkbox'
            id='remember'
            className='h-4 w-4 border border-gray-700 accent-green-900 cursor-pointer mr-2'
          />
          <label htmlFor='remember' className='text-sm'>
            Remember me
          </label>
        </div>
        {error && <p className='text-red-600 text-sm'>{error}</p>}
        {/* Terms Agreement */}
        <p className='text-xs mb-4'>
          By clicking <span className='font-semibold'>Agree & Continue</span>, you agree to the 
          <span className='text-blue-800 font-semibold cursor-pointer'> User Agreement</span>, 
          <span className='text-blue-800 font-semibold cursor-pointer'> Privacy Policy</span>, and 
          <span className='text-blue-800 font-semibold cursor-pointer'> Cookie Policy</span>.
        </p>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-[rgb(43,62,101)] text-white py-2 rounded-full font-bold hover:bg-blue-800'
        >
            <Link to="/LandingPage">  Agree & Continue  </Link>

        </button>
      </form>

      {/* Divider */}
      <div className='flex items-center justify-between my-4 w-full max-w-md'>
        <hr className='w-full' />
        <span className='px-2 text-sm text-gray-500'>or</span>
        <hr className='w-full' />
      </div>

      {/* Continue With Other Account */}
      <button className='w-full max-w-md bg-gray-500 text-white py-2 rounded-full font-bold hover:bg-[rgb(101,43,43)] '>
        Continue with Google
      </button>

      {/* Sign In Redirect */}
      <p className='mt-4 text-sm text-white'>
        I've you sign in before? 
        <span className='text-blue-800 font-semibold cursor-pointer'> Sign in</span>
      </p>

      <span>
    </span>;
    </div>
  )
}

export default Login;
