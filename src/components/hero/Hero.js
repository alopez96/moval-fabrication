import React from 'react'
import Styled from 'styled-components'
import hero_img from './../../images/hero_img.jpeg'

const FullScreen = Styled.div`
    background-color:red;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Image = Styled.img`
    width: 100vw;
    height: 60vh;
    object-fit: cover;
`

const Header = Styled.h1`
    margin: 30px;
`

function Hero ({ style, headerStyle }) {
    return(
        <FullScreen style={style}>
            <Header style={headerStyle}>We weld and manufacture anything metal</Header>
            <Image src={hero_img}/>
        </FullScreen>
    )
}

export default Hero