import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'

function Nav ({ linkStyle }) {
    
    return (
        <div>
            <ul style={listStyle}>
                <li style={listItem}>
                    <NavLink title={'Home'} to={'/'} linkStyle={linkStyle}/>
                </li>
                <li style={listItem}>
                    <NavLink title={'About'} to={'/about'} linkStyle={linkStyle}/>
                </li>
            </ul>
        </div>
    )
}

const listStyle = {
    display: 'inline',
    position: 'absolute',
    top: '10px',
    right: '10px' 
};

const listItem = {
    display: 'inline',
    marginLeft: '10px',
    marginRight: '10px',
    fontFamily: 'Arial',
    fontWeight: '500',
    fontSize: '1.2rem',
};

export default Nav;