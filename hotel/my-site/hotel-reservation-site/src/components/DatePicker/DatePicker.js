
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import React, { useState, useEffect } from "react";
import '../../styles/main.scss';
import Input from "../Input/Input";
import moment from "jalali-moment";
import { Link } from "react-router-dom";

const DatePicker = () => {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [days, setDays] = useState(0);
 
  const handleClickSearch=()=>{
  }
useEffect(()=>{
  if(startDate){

    const date = startDate.year + "/"+ startDate.month +"/" + startDate.day;
    console.log(date)
    

    console.log(parseInt(date.toString()))
  }
},[startDate])
  
  

  // useEffect(() => {

  //   // if(startDate && endDate && endDate.day > startDate.day){
  //   //   setDays(endDate.day - startDate.day)
  //   // }
  //   // setStartDate({
  //   //   year: date.toLocaleDateString("fa-IR", { year: "numeric" }),
  //   //   month: date.toLocaleDateString("fa-IR", { month: "numeric" }),
  //   //   day: date.toLocaleDateString("fa-IR", { day: "numeric" }),
  //   // });

  // }, [startDate][endDate]);





 const m = moment('1367/11/4', 'jYYYY/jM/jD');
  m.locale('fa');
  m.year(1368); // set jalali year
  // //  If the range is exceeded, it will bubble up to the year.
  m.month(3); // month will be 4 and m.format('M')=='4' , jMonth Accepts numbers from 0 to 11.
  m.date(10); // set a date
 // 1368/4/10
  // m.subtract(1, 'year'); // subtract a Jalali Year
  // // m.format('YYYY/MM/D'); // 1367/4/10
  // m.add(2, 'month'); // add two shamsi Month
  // // m.format('YYYY/MM/D'); // 1367/6/10
  // m.endOf('month').format('YYYY/MM/D'); // 1367/6/31
  // m.startOf('year').format('YYYY/MM/D'); // 1367/1/1
//  console.log(m)

  return (
    <div className="dtpicker">
      {/* <p>{mm}</p> */}
      <p>{m.format('YYYY/MM/D')}</p>
      {/* <p>{m.endOf('month').format('YYYY/MM/D')}</p> */}



     \


      <div className="dtpicker-right"> 

     
      <DtPicker
        onChange={setStartDate}
        local="fa"
        clearBtn="true"
        isRequired="true"
        todayBtn="true"
        headerClass="custom-headr"
        inputClass='custom-input'
        // initValue={startDate}
        placeholder="تاریخ ورود"
      />
      </div>
      <div className="dtpicker-center"> 

      <DtPicker
        onChange={setEndDate}
        local="fa"
        clearBtn="true"
        isRequired="true"
        todayBtn="true"
        headerClass="custom-headr"
        inputClass='custom-input'
        placeholder="تاریخ خروج"
      />
      </div>
      <div className="dtpicker-left">

      
      <Input type="text" disabled="disabled" value={`${days} شب`} />
      </div>
      <Link to="/onlinereservation" className="btn"  onClick={handleClickSearch}>جستجوی اتاق</Link>
    </div>
  );
};
export default DatePicker;
