"use client"

import { Hero, SearchBar, SliderComponent, CustomFilter } from "@/components";


import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import MedicineCard from "@/components/MedicineCard"; // Assuming MedicineCard is a component in your project
import Link from "next/link"

export default async function Home() {
  

  return (
    <main className="overflow-hidden">
      <Hero />
      <SliderComponent />
      
      
 <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Medicine Hub</h1>
          <p className="item-centre">Explore as per your Needs</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="Device Type" />
          </div> 
         
{/*  
           {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allmedicines.map((medicine) => (
                  <MedicineCard medicine={medicine} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allmedicines?.message}</p>
            </div>
          )}  */}
        </div>
      </div>
    </main>
  );
}



