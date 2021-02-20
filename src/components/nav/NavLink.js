import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

function NavLink ({ title, to, linkStyle }) {
  
    return(
        <Link href={to} style={linkStyle}>
            {title}
        </Link>
    )
}

export default NavLink;