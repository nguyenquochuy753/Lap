import React,{useEffect,useState} from "react";
import "./App.css"
import user_icon from "./img/user (1).png"
import Axios from "axios"

function App() {
  const [postList,setPostList] = useState()
  const [caption,setCaption] = useState()
  const [image,setImage] = useState()
  useEffect(()=>{
    Axios.get('http://localhost:8000/v1/post/get')
    .then((res)=>{setPostList(res.data); console.log(res.data)})
    .catch(err=>console.log(err))
  },[])
  const fd = new FormData()
  fd.append('caption',caption)
  fd.append('image',image)
  const submitHandle = ()=>{
    Axios.post('http://localhost:8000/v1/post/add',fd)
    window.location.reload()
  }
  return (
    <div className="container">
      <div className="header">
        <img 
          className="img" 
          src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" alt=""/>
        <div className="text">Logout</div>
      </div>
      <div className="card_container">
        {postList?.map((post, key) => {
          const imgUrl = 'http://localhost:8000/' + post.image;
          return (
            <div className="card" key={key}>
              <div className="user_info_container">
                <img className="user_icon" src={user_icon} alt="" />
                <div className="user_name">{post.user}</div>
              </div>
              <div>
                <img className="img_post" src={imgUrl} alt="" />
              </div>
              <div className="caption">{post.caption}</div>
            </div>
          )
        })} 
      </div>
      <div className="upload_container">
        <input
          className="input_caption"
          placeholder="Enter a caption..."
          type="text"
          onChange={(e)=>setCaption(e.target.value)}
           />
        <br/>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
         />
        <div className="button" onClick={()=>submitHandle()}>Upload</div>
      </div>
    </div>
  );
}

export default App;
