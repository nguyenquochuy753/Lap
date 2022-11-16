import React from 'react'
import "./Header.css"
import PersonIcon from "@mui/icons-material/Person";
import IconButton from '@mui/material/IconButton';
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large'/>
        </IconButton>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' />
        <IconButton>
            <ForumIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header
