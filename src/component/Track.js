import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import token from '../Util/token'
import axios from 'axios'

const url="https://api.spotify.com"
const apiheader= new Headers()
apiheader.append("Authorization",`${token.id}`)

const reqoption={
  method:"GET",
  headers:apiheader,
  redirect:"follow"
}

function Track(props) {


  const [tracks,setTracks]=useState()
  const [audio,setAudio]=useState(null)
  const [preurl,setPreurl]=useState(null)
  const [playing ,setPlaying]=useState(false)
  const params=useParams()

  const trackicon=(url)=>{
    if(!url)
    return <span  className='text-danger'>No Tracks</span>
    if(playing && preurl==url)
    return <button className="btn btn-sm btn-warning"><i className="bi bi-pause"></i></button>
    return <button className="btn btn-sm btn-success"><i className="bi bi-play"></i></button>
  }
  useEffect(()=>{
    fetch(`${url}/v1/artists/${params.id}/top-tracks?market=IN`,reqoption)
      .then(res=>res.json()).then(res=>{
        setTracks(res.tracks)
        console.log("output",res)
      })
      .catch(err=>{toast.error(err.message)})
  },[])

  const playaudio=(url)=>{
    const myaudio=new Audio(url)
    if(!playing){
      myaudio.play()
      setPlaying(true)
      setAudio(myaudio)
      setPreurl(url)
    }else{
      audio.pause()
      if(preurl==url){
        setPlaying(false)
      }else{
        myaudio.play()
        setAudio(myaudio)
        setPreurl(url)
      }
    }
  }
  return (
   <>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h4 className="display-4">Tracks</h4>
        </div>
      </div>
      <div className="row">
        {
          tracks?.map((item)=>{
            const {id,name,album,preview_url}=item
            return(
              <>
              <div className="col-md-4 mb-3">

                <div className="card" onClick={()=>playaudio(item.preview_url)}>
                <img src={album.images[1].url} alt="" className="card-img-top" />
                  <div className="card-header">
                    <h6 >{name}</h6>
                  </div>
                  <div className="card-footer">
                    {trackicon(preview_url)}
                  </div>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
   </>
  )
}

export default Track
