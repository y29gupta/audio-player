import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Search(props) {
  const [artistname,setArtistname]=useState()

  const submithandler=(e)=>{
e.preventDefault()
    try{
        console.log(artistname,"artist")
        props.searchArtist(artistname)
    }catch(error){
      toast.error("token expired")
    }

  }
  return (
   <>
    <div className="row col-md-6 offset-3 mt-2 mb-3">
      <div className="card">
        <div className="card-body">
          <form action="" onSubmit={submithandler}>
          <div className="form-group">
            <label htmlFor="" className="form-label">Enter Artist Name</label>
            <div className="input-group">
                  <input type="search" value={artistname} onChange={(e)=>setArtistname(e.target.value)} className='form-control'/>
                  <input type="submit" className='btn btn-success' />
              </div>

          </div>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default Search
