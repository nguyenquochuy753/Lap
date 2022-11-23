import React,{useState,useEffect} from "react";
import './App.css';
import Video from "./components/Video";
import Axios from "axios";

function App() {
  const [videos , setVideos] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:8000/v1/shortVideo/read')
    .then((res)=>{setVideos(res.data) 
      console.log(res)})
  },[])
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video)=>{
          return <Video 
            key={video.url}
            url={video.url}
            channel={video.channel} 
            description={video.description}
            song={video.song}
            likes={video.likes}
            shares={video.shares}
            messages={video.messages}
          />
        })}
      </div>
    </div>
  );
}

export default App;
