import * as React from "react"
import Nav from './../components/nav/Nav'
import Hero from './../components/hero/Hero'
import constants from '../variables/constants'
import './../css/main.css'

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
  color: constants.palleteBrown,
  fontSize: constants.fontSizeXLarge
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Moval Fabrication</title>
      <Hero style={{ ...heroStyle, color: 'red'}} headerStyle={headerStyle}/>
      <Nav/>
    </main>
  )
}

export default IndexPage