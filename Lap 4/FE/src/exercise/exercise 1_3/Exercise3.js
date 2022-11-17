import "typeface-roboto";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import First from './FirstPage';
import Second from './SecondPage';
import Third from './ThirdPage';
function Exercise3({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  }
  //thay component bằng element trong Route
  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <Switch>
                  <Route
                    exact
                    path={link.url}
                    render={() => (
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={() => <ListItemText primary={link.name} />}
                  />
                </Switch>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

Exercise3.defaultProps = {
  links: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" },
  ]
};

export default Exercise3;
