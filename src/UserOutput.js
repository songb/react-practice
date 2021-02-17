import React from "react";

const UserOutput = (props)=>{
    return (
        <div>
        <p>paragrah1</p>
        <p>{props.username}</p>
        <p>paragrah2</p>
        </div>
    );
}

export default UserOutput;