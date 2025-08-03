import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./products";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import About from "./About";

const Home = () => {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <Categories />
      <About />
      {/* <NewArrival /> */}
      {/* <BestSeller /> */}

      {/* <CounDown /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
