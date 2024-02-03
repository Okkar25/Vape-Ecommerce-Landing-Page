import React from "react";
import BestDeals from "./components/BestDeals";
import Devices from "./components/Devices";
import Hero from "./components/Hero";
import LongCarousel from "./components/LongCarousel";
import MemberShip from "./components/MemberShip";
import NewReleased from "./components/NewReleased";
import Pods from "./components/Pods";
import Disposable from "./components/Disposables";

const App = () => {
  return (
    <>
      <Hero />
      <BestDeals />
      <MemberShip />
      <NewReleased />
      <LongCarousel />
      <Devices />
      <Pods />
      <Disposable/>
    </>
  );
};

export default App;
