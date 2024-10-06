import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchPannel from "../SearchPanel/SearchPanel";
import ShowRooms from "../ShowRooms/ShowRooms";


const OnlineReservasion = () => {
  return (
    <div className="online-reserve">
      <TopMenu />
      <Header />
      <SearchPannel/>
      <ShowRooms/>
      <Footer/>
    </div>
  );
};

export default OnlineReservasion;
