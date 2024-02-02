import React from "react";
import BestDeals from "./components/BestDeals";
import Hero from "./components/Hero";
import MemberShip from "./components/MemberShip";
import NewReleased from "./components/NewReleased";

const App = () => {
  return (
    <>
      <Hero />
      <BestDeals />
      <MemberShip />
      <NewReleased />
    </>
  );
};

export default App;
