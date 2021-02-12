import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import NavLink from './NavLink';

function Nav ({ }) {
    
    return (
        <div>
            <ul style={listStyle} className='nav-list'>
                <li style={listItem}>
                    <NavLink title={'Home'} to={'/'}/>
                </li>
                <li style={listItem}>
                    <NavLink title={'About'} to={'/about'}/>
                </li>
            </ul>
        </div>
    )
}

const listStyle = {
    display: 'inline',
    position: 'fixed',
    top: '1rem',
    right: '3rem' 
};

const listItem = {
    display: 'inline',
    marginLeft: '10px',
    marginRight: '10px',
    fontFamily: 'Arial',
    fontWeight: '500',
    color: '#000',
    fontSize: '1.2em',
    textDecorationLine: 'none'
};

export default Nav;