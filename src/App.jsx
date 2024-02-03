import React from "react";
import BestDeals from "./components/BestDeals";
import Devices from "./components/Devices";
import Disposable from "./components/Disposables";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MemberShip from "./components/MemberShip";
import NewArrivals from "./components/NewArrivals";
import NewReleased from "./components/NewReleased";
import Pods from "./components/Pods";

const App = () => {
  return (
    <>
      <Hero />
      <BestDeals />
      <MemberShip />
      <NewReleased />
      <NewArrivals />
      <Devices />
      <Pods />
      <Disposable />
      <Footer />
    </>
  );
};

export default App;
