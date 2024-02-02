import React from "react";
import BestDeals from "./components/BestDeals";
import Hero from "./components/Hero";
import LongCarousel from "./components/LongCarousel";
import MemberShip from "./components/MemberShip";
import NewReleased from "./components/NewReleased";

const App = () => {
  return (
    <>
      <Hero />
      <BestDeals />
      <MemberShip />
      <NewReleased />
      <LongCarousel />
    </>
  );
};

export default App;
