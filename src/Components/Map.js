import React from 'react';
import { MapList } from "./MapList"


// const employees = ["Keerthana", "Sundar", "Radhika", "Tharini"]
const employees = [
    {
        name : "Hasini",
        location: "Chennai",
        id : "1"
    },
    {
        name : "Anu",
        location: "Bangalore",
        id : "2"
    },
    {
        name : "Sankar",
        location: "Kanchipuram",
        id : "3"
    },
    {
        name : "Kadhir",
        location: "coimbatore",
        id : "4"
    },
]

function Map() {
    return (
        <div>
           {employees.map((employee) => {
               return (
                   <div key={employee.id}>
                    <MapList name={employee.name} location={employee.location} />
                   </div>
               )
           })} 
        </div>
    )
}

export default Map
