import React from 'react' 
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1> Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay connected!</p>
        <div>
          <input type="email" placeholder='Your Email-Id'/>
          <button>SUbscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
