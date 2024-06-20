"use client"
import React from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import SliderComponent from '@/components/SliderComponent'
const Hero = () => {
    const handelScroll =() =>{

    }
  return (
    <div className='hero'>
      <div className='flex-1 pt-24 padding-x'>
        <h1 className='hero__title pl-6'>
          Smart Savings for Better Health: 
        </h1>

        <p className='hero__subtitle text-left pl-6'>
          Find the Best Deals on Medicines from Trusted Online Pharmacies.
        </p>

        <CustomButton
          title="Medicine Hub"
          containerStyles="bg-primary-blue pl-6 text-white rounded-full mt-10"
         
          handleClick={handelScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className="hero__image bg-#59C3DB pt-10 pl-28">
        <Image src="/cry.png" alt="Hero Image" height={400} width={400}/>
        

           

        </div>
      </div>
      
    </div>
    
   
  );
}

export default Hero;

