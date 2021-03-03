import React from 'react'


function Button ({ cta }) {
    return(
        <button type='button' className='btn btn-primary'>
            {cta}
        </button>
    )
}

export default Button