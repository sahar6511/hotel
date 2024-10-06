import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";


// import Space from '../Space/Space';
// import SearchPanel from '../SearchPanel/SearchPanel';
const Home = () => {
  return (
    <div>
      <TopMenu />
      <Header />
      <Slider />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
