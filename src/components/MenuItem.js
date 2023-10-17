import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Menu({ text="", icon, isActive=false, onClick=() =>{} }) {
    return (
        <div className={ `menu ${isActive ? 'active-menu' : ''}`} onClick={ onClick }>
            <FontAwesomeIcon icon={ icon } className='menu-icon'/>
            <p className='menu-text'>{ text }</p>
            { isActive && <div className='active-indicator'></div> }
        </div>
    )
}

export default Menu;