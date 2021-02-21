import React from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'
import constants from './../../variables/constants'

const small = constants.mobileScreen

const Center = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: ${small}px) {
        flex-direction: column;
        justify-content: center;
    }
`
const Image = Styled.img`
    object-fit: cover;
    width: 400px;
    height: 400px;
    @media (max-width: ${small}px) {
        width: calc(100% - 30px);
        height: calc(100% - 30px);
    }
`

function TextWithImage ({ width, isMobile, my_text, my_image }) {

    return(
        <Center>
            <Image src={my_image} alt='image 1'/>
            <h1>{my_text}</h1>
        </Center>
    )
}

export default TextWithImage;