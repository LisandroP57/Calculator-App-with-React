import React from "react";
import mathLogo from '../../logo/maths.png';
import '../../App.css';

export const Logo = (props) => (
    <div className='mathLogo-contain'>
        <img 
            src={mathLogo}
            className='mathLogo'
            alt='Logo de Calculator App'
        />
        {props.imgLogo}
    </div>
);

export default Logo;