import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter, Route } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StudentPreferences from "../src/StudentPreferences";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [value, setValue] = React.useState('1. Online Shopping Website');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Your Subject Preferences
          </Typography>
          <Link href="/home" variants="body2">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              <ExitToAppIcon />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          
        </Container>
        <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="studentid"
                label="Student ID"
                name="id"
                type="number"
                autoFocus
              />
              <Container maxWidth="lg" className={classes.container}>
          
          </Container>
              <FormControl component="fieldset">
                <FormLabel component="legend">Developer type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="1.	Frontend" control={<Radio />} label="1.	Frontend" />
                    <FormControlLabel value="2.	Backend" control={<Radio />} label="2. Backend" />
                    <FormControlLabel value="3.	Both" control={<Radio />} label="3.	Both" />
                    <FormControlLabel value="4.	None" control={<Radio />} label="4.	None" />
                </RadioGroup>
                </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Languages/Skills</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="1. Java" />}
                    label="1. Java"
                  />
                  <FormControlLabel
                    control={<Checkbox name="2.	JavaScript" />}
                    label="2. JavaScript"
                  />
                  <FormControlLabel
                    control={<Checkbox name="3. C" />}
                    label="3. C"
                  />
                  <FormControlLabel
                    control={<Checkbox name="4. C++" />}
                    label="4. C++"
                  />
                  <FormControlLabel
                    control={<Checkbox name="5. Python" />}
                    label="5. Python"
                  />
                  <FormControlLabel
                    control={<Checkbox name="6. PHP" />}
                    label="6. PHP"
                  />
                  <FormControlLabel
                    control={<Checkbox name="7. Ruby" />}
                    label="7. Ruby"
                  />
                  <FormControlLabel
                    control={<Checkbox name="8. Swift" />}
                    label="8. Swift"
                  />
                  <FormControlLabel
                    control={<Checkbox name="9. HTML & CSS" />}
                    label="9. HTML & CSS"
                  />
                  <FormControlLabel
                    control={<Checkbox name="10. XML" />}
                    label="10. XML"
                  />
                  <FormControlLabel
                    control={<Checkbox name="11. XCode IDE" />}
                    label="11. XCode IDE"
                  />
                  <FormControlLabel
                    control={<Checkbox name="12. Objective-C" />}
                    label="12. Objective-C"
                  />
                  <FormControlLabel
                    control={<Checkbox name="13. Android Studio" />}
                    label="13. Android Studio"
                  />
                  <FormControlLabel
                    control={<Checkbox name="14. Firebase" />}
                    label="14. Firebase"
                  />
                  <FormControlLabel
                    control={<Checkbox name="15. MongoDB" />}
                    label="15. MongoDB"
                  />
                </FormGroup>
                <FormHelperText>At least 1 language/skill for frontend and backend</FormHelperText>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Role</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="1.	Documentation" />}
                    label="1. Documentation"
                  />
                  <FormControlLabel
                    control={<Checkbox name="2.	Development" />}
                    label="2. Development"
                  />
                  <FormControlLabel
                    control={<Checkbox name="3.	Wireframes Designer " />}
                    label="3. Wireframes Designer "
                  />
                  <FormControlLabel
                    control={<Checkbox name="4.	UI Designer" />}
                    label="4. UI Designer"
                  />
                  <FormControlLabel
                    control={<Checkbox name="5.	Database Developer" />}
                    label="5. Database Developer"
                  />
                </FormGroup>
                <FormHelperText>Each group needs at least 1 of each role</FormHelperText>
              </FormControl>
              <FormControl component="fieldset">
            <FormLabel component="legend">Topic</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="1.	Online Shopping Website" control={<Radio />} label="1. Online Shopping Website" />
                <FormControlLabel value="2.	Health Service Mobile Application" control={<Radio />} label="2. Health Service Mobile Application" />
                <FormControlLabel value="3.	Messaging Mobile Application" control={<Radio />} label="3.	Messaging Mobile Application" />
                <FormControlLabel value="4.	Restaurant Booking Website" control={<Radio />} label="4. Restaurant Booking Website" />
                <FormControlLabel value="5.	Weather Website" control={<Radio />} label="5. Weather Website" />
            </RadioGroup>
            </FormControl>
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <p className={classes.p}>
                By Clicking "Submit the preference", your docu will save
              </p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit the preference
              </Button>
            </form>
      </main>
    </div>
  );
}
