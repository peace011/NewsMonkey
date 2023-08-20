import React from 'react'
import Loading from './Loading.gif'

function Spinner() {
  return (
    <div className='text-center'>
        <img src={Loading} alt="spinner"/>
    </div>
  )
}

export default Spinner