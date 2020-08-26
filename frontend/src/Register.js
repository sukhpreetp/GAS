import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import Background from "./blue.jpg";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    marginTop: 0,
    // paddingTop: '10vh'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  text1: {
    color: "white",
  },
  backgroundBlue: {
    backgroundColor: theme.palette.primary.main,
    height: "75vh",
  },
  backgroundWhite: {
    height: "70vh",
  },
  fab: {
    backgroundColor: theme.palette.primary.main,
  },
  image: {
    backgroundImage: `url(${"frontendsrcimages\teamwork.jpg"})`,
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  avatar1: {
    margin: theme.spacing(1),
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    marginBottom: "100px",
  },
  p: {
    fontWeight: "bolder",
  },
}));

export default function RegisterSide() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        component="main"
        className={classes.root}
      >
        <CssBaseline />
        <Grid
          item
          xs={6}
          sm={3}
          md={5}
          component={Paper}
          elevation={20}
          className={classes.backgroundWhite}
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Student Registration
            </Typography>
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <p className={classes.p}>
                By Clicking "Create Student Account", you Agree to our Terms of
                Service and Privacy Policy.
              </p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Student Account
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="loginpage" variant="body2">
                    Already have an Account? Click here to Sign In.
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        {/* <Grid item xs={false} sm={1} md={2}>
      <img src={logo} />
      </Grid> */}
      </Grid>
      <Link href="/home" variants="body2">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
      </Link>
    </div>
  );
}
