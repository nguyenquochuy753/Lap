import React from 'react'
import DatingCards from './components/DatingCards'
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons'


function Exercise2() {
  return (
    <div style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
      <Header/>
      <DatingCards/>
      <SwipeButtons/>
    </div>
  )
}

export default Exercise2
