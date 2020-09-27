import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import StudentPreferences from "../src/StudentPreferences";
import { NavLink } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/StuInfo">
      <ListItemIcon>
         <AssignmentIcon />
      </ListItemIcon>
      <ListItemText textDecoration="none" primary="My Information" />
    </ListItem>

    <ListItem button component={Link} to="/studentGroup">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My Group" />
    </ListItem>

    <ListItem button component={Link} to="/StudentPreferences">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText textDecoration="none" primary="My Preferences" />
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Functions</ListSubheader>
    <ListItem button component={Link} to="">
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Ask a Question" />
    </ListItem>

    <ListItem button component={Link} to="">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
