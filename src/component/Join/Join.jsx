import React from 'react'
import './join.css';


const Join = () => {
  return (
    <div className='join' id='join-us'>
      <div className="left-j">
        <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US</span>
        </div>
      </div>
      <div className="right-j"></div>
       
       <form action="" className="email-container">
        <input type="email" name='user-email' placeholder='Enter your email' />

        <button className='btn btn-j'>Join Now</button>
       </form>
    </div>
  )
}

export default Join
