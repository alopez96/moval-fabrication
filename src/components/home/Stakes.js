import React from 'react'
import TextWithImage from './../image_text/TextWithImage'
import my_image from './../../images/hero_img.jpeg'

const my_text = 'test'

function Stakes ({ width, isMobile }) {

    return(
        <section>
            <TextWithImage
            width={width} isMobile={isMobile}
            my_text={my_text} my_image={my_image}/>
        </section>
    )
}

export default Stakes;