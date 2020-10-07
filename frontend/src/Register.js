import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { postApi } from "./Api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import Header from "./Header.js";
import bg from './blue.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "110vh",
    marginTop: "80px",
    marginBottom: "20px",
    paddingTop: "0vh",
    paddingBottom: "0px",
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat'
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
    height: "100%",
    // marginBottom: "100px"
    // marginBottom: theme.spacing(1),
    // paddingBottom: "20px"
  },
  fab: {
    backgroundColor: theme.palette.primary.main,
  },
  // image: {
  //   backgroundImage: `url(${"frontendsrcimages\teamwork.jpg"})`,
  //   backgroundRepeat: "no-repeat",
  //   // backgroundColor:
  //   //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //   // backgroundSize: 'cover',
  //   // backgroundPosition: 'center',
  // },
  paper: {
    // margin: theme.spacing(8, 4),
    marginTop: "40px",
    marginLeft: "40px",
    marginRight: "40px",
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
    height: "100%"
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
  let [toLogin, setToLogin] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target); //Get submitted form data.
    //Build post body.
    const body = {
      studentId: data.get("id"),
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    //Send api request in POST method.
    postApi("/users", body).then((res) => {
      //Use the response data.
      if (res.result === "success") {
        toast.success("Your registration was successful.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setToLogin(true);
      } else {
        toast.error("Submission failed.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    });
  };

  return (
    <div>
      {toLogin && <Redirect to="/loginPage" />}
      <Header/>
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
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="First Name"
                  label="First Name"
                  name="firstName"
                  type="string"
                  autoFocus
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Last Name"
                  label="Last Name"
                  name="lastName"
                  type="string"
                  autoFocus
              />
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
      </Grid>
      <Link href="/" variants="body2">
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
