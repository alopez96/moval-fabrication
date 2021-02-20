import React from 'react'
import Styled from 'styled-components'

const FullScreen = Styled.div`
    background-color:red;
    width: 100vw;
    height: 100vh;
`

function Hero ({ style }) {
    return(
        <FullScreen style={style}>
        </FullScreen>
    )
}

export default Hero