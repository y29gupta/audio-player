import React from 'react'
import { NavLink } from 'react-router-dom'

function Pnf() {
  return (
    <div className='container'>
      <div className="row">
      <div className="col-md-12 text-center">

        <h2 className="display-2 text-danger">Page not Found</h2>
        <NavLink className="btn btn-secondary" to={"/"}>Return Home</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Pnf
