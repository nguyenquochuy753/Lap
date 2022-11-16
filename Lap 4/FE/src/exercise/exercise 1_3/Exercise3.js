import React,{useState} from 'react'
import "typeface-roboto";
import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {BrowserRouter as Router , Route , Switch , Link} from "react-router-dom";
import First from "./FirstPage";
import Second from "./SecondPage";
import Third from "./ThirdPage";



export default function Exercise3({links}) {
  const [open , setOpen] = useState(false);
  function toggleDrawer({type , key}){
    if(type === "Keydơwn" && (key === "Tab" || key === "shift")){
      return;
    }
    setOpen(!open);
  }
  return (
    <div>
      <Router>
        <Button onClick={toggleDrawer}>Open Nav</Button>
        <section>
          <Route path='/first' component={First}/>
          <Route path='/second' component={Second}/>
          <Route path='/third' component={Third}/>
        </section>
        <Drawer open={open} onClose={toggleDrawer}>
          <div 
            style={{width:250}}
            role='presentation'
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {links.map((link)=>(
                <ListItem button key={link.url} component={link} to={link.url}>
                  <Switch>
                    <Route 
                      exact
                      path={link.url}
                      render={()=>(
                        <ListItemText 
                          primary={link.name}
                          primaryTypographyProps={{color: "primary"}}
                        />
                      )}
                    />
                    <Route 
                      path='/'
                      render={()=><ListItemText primary={link.name}/>}
                    />
                  </Switch>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Router>
    </div>
  )
}

Exercise3.defaultProps = {
  links:[
    {url:"/first" , name:"First Page"},
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" }
  ]
}


