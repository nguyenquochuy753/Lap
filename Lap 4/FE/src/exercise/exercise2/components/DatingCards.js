import React,{useEffect,useState} from 'react'
import Axios from "axios"


function DatingCards() {
    const [cardList , setCardList] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response)=>setCardList(response.data))
    }, [])
  return (
    <div>
      {cardList.map((val,key)=>{
        return(
            
            <div>
                <img style={{ height: 150, width: 150, objectFit: 'contain' }} key={key} src={val.imgURL} alt='' />
                <div>{val.name}</div>
            </div>
        )
      })}
    </div>
  )
}

export default DatingCards
