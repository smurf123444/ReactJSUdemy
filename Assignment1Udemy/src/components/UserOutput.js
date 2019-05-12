import React from 'react';

const useroutput = (props) => {
    return (
    <div>
        <input type="text" onChange={props.changed} value={props.value}></input>
    </div>    
    )
};

export default useroutput;