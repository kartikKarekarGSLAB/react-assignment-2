import React from 'react';

let style = {
    display: `inline-block`,
    padding: `16px`,
    textAlign: `center`,
    margin: `16px`,
    border: `1px solid black`
}

let Char = (props) => {
    return (
    <p style={style} 
       className={props.class} 
       onClick={props.click}>
            {props.char}
    </p>);
}

export default Char;