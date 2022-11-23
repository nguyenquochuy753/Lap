import React,{useState} from 'react'
import "./VideoSideBar.css"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import MessageIcon from "@mui/icons-material/Message"
import ShareIcon from "@mui/icons-material/Share"

function VideoSideBar({likes,shares,messages}) {
    const [liked , setLiked] = useState(false)
  return (
    <div className='videoSideBar'>
      <div className='videoSideBar_button'>
        {liked ? <FavoriteIcon fontSize='large' onClick={e => setLiked(false)}/> : <FavoriteBorderIcon fontSize='large' onClick={e => setLiked(true)}/>}
        <p>{liked? +likes + 1 : likes}</p>
      </div>
      <div className='videoSideBar_button'>
        <MessageIcon fontSize='large'/>
        <p>{messages}</p>
      </div>
        <div className='videoSideBar_button'>
            <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSideBar
