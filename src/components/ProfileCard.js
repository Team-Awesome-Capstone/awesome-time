import React from 'react'

const Card = ({props}) =>
{


  return (
    <div className='card-container'>
      <img src={props.image} />
      <h4 className='name'>{props.name}</h4>
      <h5 className='description'>{props.description}</h5>
      <div className='buttons'>
        <button>Connect with Me</button>
      </div>
    </div>
  )
}

export default Card;

