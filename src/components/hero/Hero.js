import React from 'react'
import Styled from 'styled-components'
import hero_img from './../../images/gate.jpg'

const FullScreen = Styled.div`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 500px) {
            flex-direction: column;
    }
`

const Image = Styled.img`
    width: 50vw;
    height: 500px;
    object-fit: cover;
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100vw;
        height: 60vh;
    }
`

const Header = Styled.h1`
    margin: 30px;
    width: 30vw;
    @media (max-width: 500px) {
        margin: 30px;
        width: 90vw;
    }
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