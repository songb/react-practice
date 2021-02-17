import React from 'react';

const UserInput = (props)=>{
    return (
        <input type="text" onChange={props.userNameHandler} value={props.username}/>
    );
};

export default UserInput;