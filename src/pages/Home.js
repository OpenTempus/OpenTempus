import React from "react";
import Header from "../components/Header";
import Overview from "../components/Overview";
import Technology from "../components/Technology";
import Team from "../components/Team";
import Banner from "../components/Banner";
import WhatItIs from "../components/WhatItIs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <WhatItIs />
        <Overview />
        <Technology />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
