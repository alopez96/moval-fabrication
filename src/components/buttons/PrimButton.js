import React from 'react'
import { Button } from 'semantic-ui-react'


function PrimButton ({ cta, btnSize, btnColor }) {
    return(
        <Button color={btnColor} size={btnSize} className='primary-cta'>{cta}</Button>
    )
}

export default PrimButton