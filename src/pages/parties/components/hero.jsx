import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import heroImage1 from '../../../assets/images/party1.jpg';
import heroImage2 from '../../../assets/images/part2.jpg';
import heroImage3 from '../../../assets/images/party.jpg';

const PartyHero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      <CCarousel  indicators interval={3000} className="absolute inset-0 w-full h-full">
        <CCarouselItem>
          <CImage className="d-block w-100 h-full object-cover opacity-70" src={heroImage1} alt="Party Hero 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100 h-full object-cover opacity-70" src={heroImage2} alt="Party Hero 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100 h-full object-cover opacity-70" src={heroImage3} alt="Party Hero 3" />
        </CCarouselItem>
      </CCarousel>
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <p className="text-lg uppercase tracking-widest mb-2">Ready to Experience</p>
        <h1 className="text-5xl font-extrabold mb-4">The Best Bottle Service</h1>
        <p className="text-xl mb-6">
          At Elite NYC Night Clubs & Lounges? Party like a Celebrity with BottleClients.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PartyHero;
