import * as React from "react"
import Nav from './../components/nav/Nav'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
// markup
const AboutPage = () => {
  return (
    <main style={pageStyles}>
        <Nav/>
      <title>About Page</title>
      <h1 style={headingStyles}>
        About Page
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default AboutPage