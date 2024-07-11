import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import food from '../assets/food1.jpg'

const Login = ({ setLoggedin }) => {
  const [FormData, setformData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [showpassword, setpassword] = useState(false);

  function changehandler(event) {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function changehandler2(event) {
    event.preventDefault();
    toast.success("Logged in successfully");
    setLoggedin(true);
    navigate("/");
  }

  return (
    <div className='w-10/12 max-w-[1380px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-12 mt-64 md:mt-20 '>
      <div className='w-full md:w-1/2'>
        <p className='text-4xl font-bold mb-6 text-center text-yellow-300'>Welcome to Foody</p>
        <p className='text-lg text-white mb-4'>
          At Foody, we believe in the power of delicious meals to bring people together. Our extensive collection of recipes spans various cuisines and caters to all skill levels. 
        </p>
        <p className='text-lg text-white mb-2'>
          Join us in celebrating the joy of cooking and eating good food. Your next delicious adventure awaits!
        </p>
        <form onSubmit={changehandler2} className='flex flex-col gap-2 mt-10'>
          <div className='flex flex-col gap-5'>
            <label className='w-full'>
              <p className='text-white'>Email Address <sup className='text-pink-500'>*</sup></p>
              <input
                className='bg-gray-300 rounded-[0.5rem] w-10/12 md:w-8/12 p-2 h-10'
                required
                type='email'
                name='email'
                value={FormData.email}
                onChange={changehandler}
                placeholder='Enter your email'
              />
            </label>
            <label className='w-full relative'>
              <p className='text-white'>Password <sup className='text-pink-500'>*</sup></p>
              <div className='relative w-10/12 md:w-8/12'>
                <input
                  className='bg-gray-300 rounded-[0.5rem] w-full p-2 h-10 pr-10' // Adjusted padding for the eye icon
                  required
                  type={showpassword ? "text" : "password"}
                  name='password'
                  value={FormData.password}
                  onChange={changehandler}
                  placeholder='Enter your password'
                />
                <span
                  className='absolute inset-y-0 right-0 flex items-center pr-3 text-2xl text-red-900 cursor-pointer'
                  onClick={() => setpassword(prev => !prev)}
                >
                  {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </label>
            <button className='text-xl bg-yellow-400 rounded-lg mt-1 w-10/12 md:w-4/12  md:ml-20 h-10'>Login</button>
          </div>
        </form>
      </div>
      <div className='w-full md:w-1/2 flex justify-center'>
        <img
          className='rounded-full  w-full max-w-md'
          src={food}
          alt="food"
        />
      </div>
    </div>
  );
}

export default Login;
