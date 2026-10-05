import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.imge} alt="Not found" />
      <h1>{props.userName}</h1>
      <p>I am a boy and i am {props.age} years old</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
