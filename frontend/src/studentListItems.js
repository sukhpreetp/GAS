import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/StuInfo">
      <ListItemIcon>
         <AssignmentIcon />
      </ListItemIcon>
      <ListItemText textDecoration="none" primary="My Information" />
    </ListItem>

    <ListItem button component={Link} to="/StudentPreferences">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText textDecoration="none" primary="My Preferences" />
    </ListItem>
    
    <ListItem button component={Link} to="/studentGroup">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My Group" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
