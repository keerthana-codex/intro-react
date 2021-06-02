import React from 'react'

export const MapList = (props) => {
    const {name, location} = props;
    return (
        <div>
           <h1>{`Name : ${name}`}</h1>
            <h5>{`location : ${location}`}</h5> 
        </div>
    )
}
