import React from 'react'

function DisplayCard(props) {
  const car = props.car
  return (
    
    <div className="card w-96 glass text-white">
      <figure><img src={car.image} className='min-h-64 h-64 object-cover' alt="car!"/></figure>
  <div className="card-body">
        <h2 className="card-title">{car.model}</h2>
        <h2 className="card-title">{car.make}</h2>
        <p>{car.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
    </div>
    
  )
}

export default DisplayCard