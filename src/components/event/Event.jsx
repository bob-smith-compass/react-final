import React from 'react'

export default function Event({passDataOut}) {
  return (
    <div>
      <button className="btn btn-primary" onClick={(e) => passDataOut('Data')}>Data!</button>
      <button className="btn btn-primary" onClick={(e) => passDataOut('Out!')}>Out!</button>
    </div>
  )
}
