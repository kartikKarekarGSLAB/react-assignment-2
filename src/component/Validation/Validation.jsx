import React from 'react';
import happy from './../../resources/prefect.png';
import sad from './../../resources/bad.jpg';

let Validation = (props) => {
    return (<p> 
        {props.length < 5 ? <img src={sad} alt="Too Short"/> : null}
        {(props.length >= 5 && props.length <= 15 ) ? <img src={happy} alt="Perfect"/> : null}  
        {props.length > 15 ? <img src={sad} alt="Too Long"/> : null}
    </p>);
}

export default Validation;