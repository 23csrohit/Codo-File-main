import React from 'react'
import blob from '../../assets/blobanimation.svg'

function LandingPage() { 
  return ( 
    <div className="landingContainer container">
    <img src={blob} alt="" className='blob_a blob1' />
    <img src={blob} alt="" className='blob_a blob2' />
        <div className="landingInfo">
            <h1>AIMT CODO FILE</h1>
            <p>First, solve the problem. Then, write the code.</p>
        </div>
    </div>
  )
}

export default LandingPage