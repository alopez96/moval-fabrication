import React from 'react'
import Styled from 'styled-components'

const FullScreen = Styled.div`
    background-color:red;
    width: 100vw;
    height: 100vh;
`

function Hero () {
    return(
        <FullScreen>
            Hero
        </FullScreen>
    )
}

export default Hero