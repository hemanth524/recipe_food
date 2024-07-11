import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import food5 from '../assets/food5.jpeg';
import food4 from '../assets/food4.jpg';
import food1 from '../assets/food1.jpg';

const Signup = ({ setLoggedin }) => {
  const [FormData, setformData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    conformpassword: ""
  });

  const navigate = useNavigate();
  const [showpassword, setpassword] = useState(false);

  function changehandler(event) {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function signuphandler(event) {
    event.preventDefault();
    if (FormData.password !== FormData.conformpassword) {
      toast.error("Passwords do not match");
    } else {
      toast.success("Signup successful");
      setLoggedin(true);
      navigate("/");
    }
  }

  return (
    <div className='w-11/12 max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-12 mt-40 md:mt-20'>
      
      <div className='w-full md:w-1/2'>
        <p className='text-4xl font-bold mb-6 text-center text-yellow-300'>Join Us at Foody</p>
        <p className='text-lg text-white mb-4'>
          Ready to explore a world of culinary delights? Sign up with Foody and unlock access to our extensive recipe collection. Whether you're a beginner or a seasoned chef, there's something here for everyone.
        </p>
        <p className='text-lg text-white mb-2'>
          Start your flavorful journey today!
        </p>
        <form onSubmit={signuphandler} className='flex flex-col gap-2'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col md:flex-row gap-8'>
              <label className='w-full'>
                <p className='text-white'>First Name <sup className='text-pink-500'>*</sup></p>
                <input
                  className='bg-gray-300 rounded-[0.5rem] w-full p-2 h-10'
                  required
                  type='text'
                  name='firstname'
                  value={FormData.firstname}
                  onChange={changehandler}
                  placeholder='First Name'
                />
              </label>
              <label className='w-full'>
                <p className='text-white'>Last Name <sup className='text-pink-500'>*</sup></p>
                <input
                  className='bg-gray-300 rounded-[0.5rem] w-full p-2 h-10'
                  required
                  type='text'
                  name='lastname'
                  value={FormData.lastname}
                  onChange={changehandler}
                  placeholder='Last Name'
                />
              </label>
            </div>
            <label className='w-full relative'>
              <p className='text-white'>Email Address <sup className='text-pink-500'>*</sup></p>
              <input
                className='bg-gray-300 rounded-[0.5rem] w-full p-2 h-10'
                required
                type='email'
                name='email'
                value={FormData.email}
                onChange={changehandler}
                placeholder='Enter your email'
              />
            </label>
            <div className='flex flex-col md:flex-row gap-8'>
              <label className='w-full relative'>
                <p className='text-white'>Password <sup className='text-pink-500'>*</sup></p>
                <input
                  className='bg-gray-300 rounded-[0.5rem] w-full p-2 h-10'
                  required
                  type={showpassword ? "text" : "password"}
                  name='password'
                  value={FormData.password}
                  onChange={changehandler}
                  placeholder='Enter your password'
                />
                <span className='absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 text-2xl text-red-900 cursor-pointer' onClick={() => setpassword(prev => !prev)}>
                  {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </label>
              <label className='w-full relative'>
                <p className='text-white'>Confirm Password <sup className='text-pink-500'>*</sup></p>
                <input
                  className='bg-gray-300 rounded-[0.5rem] w-full p-2 h-10'
                  required
                  type={showpassword ? "text" : "password"}
                  name='conformpassword'
                  value={FormData.conformpassword}
                  onChange={changehandler}
                  placeholder='Confirm your password'
                />
                <span className='absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 text-2xl text-red-900 cursor-pointer' onClick={() => setpassword(prev => !prev)}>
                  {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </label>
            </div>
            <button className='text-xl bg-yellow-400 rounded-lg mt-10 h-10'>Sign Up</button>
          </div>
        </form>
      </div>
      
      
      <div className='relative w-full md:w-1/2 h-[400px] flex justify-center items-center'>
        <div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-64 h-64'>
          <img
            className='rounded-full w-full h-full object-cover'
            src={food4}
            alt='food4'
          />
        </div>
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2 w-48 h-48'>
          <img
            className='rounded-full w-full h-full object-cover'
            src={food5}
            alt='food5'
          />
        </div>
        <div className='absolute top-1/2 bottom-1/2 right-0 transform -translate-y-1/2 w-48 h-48'>
          <img
            className='rounded-full w-full h-full object-cover'
            src={food1}
            alt='food1'
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
