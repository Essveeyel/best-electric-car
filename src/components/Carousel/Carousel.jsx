import React from 'react'

function Carousel({children}) {
  return (
    <div className="carousel carousel-center w-screen p-8 space-x-8 bg-neutral">
    {children}
</div>
  )
}

export default Carousel