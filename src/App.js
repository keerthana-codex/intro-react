import React from 'react'
import './App.css';
import Array from './Array';
import List from './Components/List';
import Map from './Components/Map';
import { Counter } from './Counter';
import Employee from './Employee';

// const employeeInfo = [
//   {
//     id : "1",
//     firstName : "Keerthana",
//     lastName : "Velumani",
//     age : "21"
//   },
//   {
//     id : "2",
//     firstName : "Sundar",
//     lastName : "mani",
//     age : "53"
//   },
//   {
//     id : "3",
//     firstName : "Tharini",
//     lastName : "Karthikeyan",
//     age : "30"
//   }
// ]
function App() {
  return (
    <div className="App">
         {/* <List /> */}
         {/* <Map /> */}
         <Array />
      {/* {employeeInfo.map((employee) =>{ */}
        {/* // const {firstName , lastName ,age} = employee; */}

        {/* return (
          <Employee firstName={firstName} lastName={lastName} age={age} />
          <Employee key={employee.employeeId} {...employee} />
        ) */}
      {/* })} */}
      {/* <Counter /> */}
      <br/>
      {/* <Employee name="Keerthana" age="22"/>
      <Employee name="Sundar Aathman" age="51"/>
      <Employee name="Harini" age="12"/> */}
    </div>
  );
}

export default App;
