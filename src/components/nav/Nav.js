import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import routes from './routes'
import linkStyle from './linkStyle'

function Nav () {
    
    return (
        <div>
            <ul style={listStyle}>
            {routes.map((route)=>{
                return(
                <li style={listItem}>
                    <NavLink
                    title={route.title} 
                    to={route.to}
                    linkStyle={linkStyle}/>
                </li>
                )
            })}
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