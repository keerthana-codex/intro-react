import React from 'react'

const employee = {
    id : "1",
    name : "Tharini",
    salary : "5000",
    address : {
        No : "125",
        Street : "ABC Nagar",
        Place : "Pallikonda",
        salary : "1000",
    Zone : {
        plantZone : "7B",
        alienZone : "41"
    }
  }
};

function List() {
    // const {id, name, salary, address} = employee;
    // const {No, Street, salary: addressSalary, Place, Zone} = address;
    // const {plantZone, alienZone} = Zone;

    const {
        name,
        id,
        salary,
        address : {
            Street,
            salary:addressSalary,
            No,
            Zone : { plantZone, alienZone}
        }
    } = employee
    return (
        <div>
            <h1>{id}</h1>
            <p>{Street}</p>
            <p>{salary}</p>
            <p>{plantZone} , {alienZone}</p>
            <p>{addressSalary}</p>
            {/* <h1>{employee.id}</h1>
            <h2>{employee.name}</h2>
            <p>{employee.address.Street}</p>
            <p>{employee.address.Zone.plantZone}</p> */}
        </div>
    )
}

export default List
