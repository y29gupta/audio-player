import React, { useEffect, useState } from 'react'
import token from "../Util/token"
import { toast } from 'react-toastify'
import Artist from './Artist'
import Search from './Search'


  const url="https://api.spotify.com"
  const apiheader= new Headers()
  apiheader.append("Authorization",`${token.id}`)

  const reqoption={
    method:"GET",
    headers:apiheader,
    redirect:"follow"
  }
function Home() {

const [artist,setArtist]=useState()
  const searchhandle=(artistname)=>{
    fetch(`${url}/v1/search?q=${artistname}&type=artist`,reqoption)
    .then(res=>res.json())
    .then(data=>{
      console.log(data,"data")
    setArtist(data.artists.items)

    })
    .catch(err=>{
      toast.error("Token Expired")
    })
  }
  useEffect(()=>{
      searchhandle("sonu")
  },[])

  return (
   <>
    <div className="contianer m-auto col-md-10">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="display-2">Home</h2>
        </div>
      </div>
      <div className="row">
        <Search searchArtist={searchhandle}/>
      </div>
      <div className="row">
      <div className="container ">
      <div className="row">

        {
          artist && artist.map((item,index)=>{
            return(
              <Artist key={index} {...item}/>
            )
          })
        }
      </div>

      </div>
      </div>
    </div>
   </>
  )
}

export default Home
