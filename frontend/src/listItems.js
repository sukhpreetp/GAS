import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import StudentTable from './studentData.js';
import { Link } from 'react-router-dom';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import EditIcon from '@material-ui/icons/Edit';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/viewStudentInfo">
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Manual Assigner" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AutorenewIcon />
      </ListItemIcon>
      <ListItemText primary="Automatic Assigner" />
    </ListItem>
  </div>
);

export const studentDashboard = (
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
      <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
    <ListItem button component={Link} to="/studentData">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Student Info" />
    </ListItem>
    <ListItem button button component={Link} to="/groupData">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Group Info" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);