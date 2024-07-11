import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="bg-black text-white w-full mt-auto py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="flex-col">
              <div><strong>Contact:</strong></div>
              <div>Email: chinthahemanthreddy07@gmail.com</div>
              <div>Phone No: 7671840199</div>
            </div>
          </div>

         
          <div className="w-full md:w-1/3 mb-4 md:mb-0 mr-64 text-center">
            <div className="text-4xl text-red-400 uppercase">@foody</div>
          </div>

         
          <div className=" md:w-1/3 mt-5 text-right  max-w-[120px]  ">
            <FontAwesomeIcon className="text-8xl  mr-3 text-red-500" icon={faCutlery} />
          </div>
        </div>

        
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-4">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p>"Easy to understand recipe!"</p>
              <p className="mt-2 text-right">- John Doe</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p>"A delightful experience every time."</p>
              <p className="mt-2 text-right">- Jane Smith</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p>"Highly recommended for food lovers."</p>
              <p className="mt-2 text-right">- Mike Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
