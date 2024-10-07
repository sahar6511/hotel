import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchPannel from "../SearchPanel/SearchPanel";
import ShowRooms from "../ShowRooms/ShowRooms";
import { DtPicker } from "react-calendar-datetime-picker";
import DatePicker from "../DatePicker/DatePicker";
import '../../styles/main.scss'


const OnlineReservasion = () => {
  return (
    <div className="online-reserve">
      <TopMenu />
      <Header />
      <DatePicker/>
      <ShowRooms/>
      <Footer/>
    </div>
  );
};

export default OnlineReservasion;
