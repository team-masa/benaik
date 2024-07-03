import React from 'react';
import { Link } from 'react-router-dom';
import featImg from '../../../assets/images/feat.jpeg';
import featImg2 from '../../../assets/images/Home.jpeg';

const Features = () => {
  return (
    <div className="flex justify-center items-center py-16 px-8 bg-white">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* Efficient Event Planning  */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Efficient event planning</h2>
          <p className="text-lg text-gray-500 mb-6 w-2/3">
            Eventica's intuitive form allows event planners to easily capture key details like name, date, ticket price, venue, and branding.
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Get Started</button>
        </div>

        { /* Key Features */}
        <div className="flex gap-x-10 justify-center items-center text-center h-full">
          <div className="w-[280px] rounded-t-full shadow-lg p-8 bg-[#4338C9]">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">KEY<br />FEATURES</h3>
            <div className="flex flex-col items-center">
              <img src={featImg2} alt="Feature 1" className="mb-4 w-20 h-24 rounded-t-full" />
              <p className="text-xl font-bold text-gray-900">Intuitive Interface</p>
              <p className="text-lg text-white -500">
                Our simple, intuitive interface makes event planning easy for beginners and experts alike.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <img src={featImg} alt="Feature 2" className="w-72 h-96 rounded-t-full" />
        </div>
      </div>
        </div>

        {/* Image */}
       
    </div>
  );
};

export default Features;

