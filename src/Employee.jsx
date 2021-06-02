import React from 'react'

function Employee(props) {
    // const Employee = ({name, age}) => {}
    console.log(props);
    const { firstName, lastName, age, id} = props;
    return (
        <div>
            <h1>Employee Name : {firstName} {lastName} {age}</h1>
            {/* <div> Employee.Name: {props.name}</div> */}
        </div>
    )
}

export default Employee
