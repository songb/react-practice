import React from 'react';

const ValidationComponent = (props)=>{
    let textMessage = "Text too short";
    if(props.textLength>=5){
        textMessage = "Text long enought"
    }

    return (
        <p>{textMessage}</p>
    );
}

export default ValidationComponent;