import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

function NavLink ({ title, to }) {
  
    return(
        <Link href={to}>
            {title}
        </Link>
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
    marginLeft: '2rem',
    marginRight: '2rem',
    fontFamily: 'Nunito',
    fontWeight: '500',
    color: '#000',
    fontSize: '1.2em'
};

export default NavLink;