import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  let Loggedin = props.Loggedin;
  let setLoggedin = props.setLoggedin;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='fixed w-full bg-zinc-600 text-white text-2xl shadow-md z-50'>
      <div className='flex justify-between items-center py-4 px-6'>
        <Link to="/" className='text-2xl font-bold uppercase'>
          <FontAwesomeIcon className='px-2 text-3xl text-red-500' icon={faCutlery} />
          foody
        </Link>
        <nav className='hidden md:flex'>
          <ul className='flex gap-6'>
            <li>
              <Link to="/">Home</Link>
            </li>
            {Loggedin && (
              <>
                <li>
                  <Link to="Country">Country</Link>
                </li>
                <li>
                  <Link to="individual">By Ingredient</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className='hidden md:flex gap-6'>
          {!Loggedin && (
            <>
              <Link to="Login">
                <button className='rounded-[8px] border border-emerald-50 px-6 bg-red-500'>
                  Login
                </button>
              </Link>
              <Link to="Signup">
                <button className='rounded-[8px] border border-emerald-50 px-4 bg-red-500'>
                  Signup
                </button>
              </Link>
            </>
          )}
          {Loggedin && (
            <>
              <Link to="/">
                <button className='rounded-[8px] border border-emerald-50 px-4 bg-red-500' onClick={() => {
                  setLoggedin(false);
                  toast.success("Logged out");
                }}>
                  Logout
                </button>
              </Link>
             
            </>
          )}
        </div>
        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button className='text-white' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-center'>
            <li className='py-2'>
              <Link to="/">Home</Link>
            </li>
            {Loggedin && (
              <>
                <li className='py-2'>
                  <Link to="Country">Country</Link>
                </li>
                <li className='py-2'>
                  <Link to="individual">By Ingredient</Link>
                </li>
              </>
            )}
            {!Loggedin && (
              <>
                <li className='py-2'>
                  <Link to="Login">
                    <button className='rounded-[8px] border border-emerald-50 px-6 bg-red-500'>
                      Login
                    </button>
                  </Link>
                </li>
                <li className='py-2'>
                  <Link to="Signup">
                    <button className='rounded-[8px] border border-emerald-50 px-4 bg-red-500'>
                      Signup
                    </button>
                  </Link>
                </li>
              </>
            )}
            {Loggedin && (
              <>
                <li className='py-2'>
                  <Link to="/">
                    <button className='rounded-[8px] border border-emerald-50 px-4 bg-red-500' onClick={() => {
                      setLoggedin(false);
                      toast.success("Logged out");
                    }}>
                      Logout
                    </button>
                  </Link>
                </li>
               
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
