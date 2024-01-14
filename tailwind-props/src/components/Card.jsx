import React from 'react'
import lotus from '../assets/lotus.jpg'

const Card = () => {
  return (
    <div>
        <div className='flex items-center justify-center' >
            <img src={lotus} alt="" style={{ height: '500px' }}/>
        </div>     
        <h1 className='text-2xl bg-green-500 rounded p-3'>Card for Photo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aperiam iure? Blanditiis delectus quisquam nisi.</p>
    </div>
  )
}

export default Card
