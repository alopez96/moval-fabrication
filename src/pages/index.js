import React, { useState, useEffect } from 'react'
import './../css/main.css'
import Nav from './../components/nav/Nav'
import Hero from './../components/hero/Hero'
import constants from '../variables/constants'
import Stakes from './../components/home/Stakes'

// constants
const linkStyle = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: constants.black,
  fontWeight: "bold",
  fontSize: "16px",
}

const heroStyle = {
  backgroundColor: constants.palleteBlack,
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const headerStyle = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  color: constants.white,
  fontSize: constants.fontSizeXLarge
}

// markup
const IndexPage = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 500);

  //like component did mount
  useEffect(() => {
    window.addEventListener('resize', () => { updateWidth() });

    //returned function will be called on component unmount 
    return () => {
        window.removeEventListener('resize', () => {updateWidth() })
    }
  }, []);

  //handle change in width
  useEffect(() => {
    // update isMobile bool
    setisMobile( width < 500 )
  }, [width]);
  
  const updateWidth = () => {        
    setWidth(window.innerWidth)
  }

  return (
    <main>
      <title>Moval Fabrication</title>
      <Nav/>
      <Hero style={{ ...heroStyle, color: 'red'}} headerStyle={headerStyle}/>
      <Stakes width={width} isMobile={isMobile}/>
    </main>
  )
}

export default IndexPage