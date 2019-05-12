
import React from 'react';
import './Person.css';
const person = (props) => {
     return ( 
    <div  onClick={props.click} className="Person">Im {props.name} and I am {props.age} years old! 
    <h3>{props.children}</h3>
    <input type="text" onChange={props.changed} value={props.name}></input>

    </div>
    )
};

export default person;