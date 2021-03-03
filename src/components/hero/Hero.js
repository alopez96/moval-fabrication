import React from 'react'
import Styled from 'styled-components'
import hero_img from './../../images/welding.jpg'
import welding from './../../images/metal.jpg'
import Button from '../buttons/Button'
import copy from './../../variables/copy_text'

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
    width: 35vw;
    text-align: left;
    text-transform: uppercase; 
    font-family: 'Steelfish Rg', 'helvetica neue', 
                helvetica, arial, sans-serif; 
    -webkit-font-smoothing: antialiased;
    @media (max-width: 500px) {
        margin: 30px;
        width: 90vw;
    }
`

function Hero ({ style, headerStyle }) {
    return(
        <FullScreen style={style}>
            <Header style={headerStyle}>We weld and manufacture anything metal</Header>
            <Button cta='Contact'></Button>
            <Image src={hero_img}/>
        </FullScreen>
    )
}

export default Hero