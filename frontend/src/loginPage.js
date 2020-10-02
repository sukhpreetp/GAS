import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {postApi} from "./Api";
import {toast} from "react-toastify";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import {userContext} from './userContext';
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "80vh",
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
}));

export default function SignInSide() {
	const classes = useStyles();
	const [jumpTo, setJumpTo] = React.useState();
	const handleSubmit = (setUser) => (event) => {
		event.preventDefault();
		const data = new FormData(event.target); //Get submitted form data.
		//Build post body.
		const body = {
			email: data.get('email'),
			password: data.get('password'),
		};
		//Send api request in POST method.
		postApi("/login", body).then(res => {
			//Use the response data.
			if (res.result === 'success') {
				toast.success("Your login was successful.", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
				});
				console.log(res.user);
				setUser(res.user);
				if(res.user.type === 'admin'){
					setJumpTo('/viewStudentInfo');
				} else {
					setJumpTo('/StudentDashboard');
				}
			} else {
				toast.error("Login failed.", {
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
		<userContext.Consumer>
			{({user, setUser}) => {
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
							<CssBaseline/>
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
										<LockOutlinedIcon/>
									</Avatar>
									<Typography component="h1" variant="h5">
										Login
									</Typography>
									<form className={classes.form} noValidate onSubmit={handleSubmit(setUser)}>
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
										<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
											className={classes.submit}
										>
											Sign In
										</Button>
										<Grid container>
											<Grid item xs>
												<Link href="#" variant="body2">
													Forgot password?
												</Link>
											</Grid>
											<Grid item xs>
												<Link href="register" variant="body2">
													Don't have an account? Sign Up
												</Link>
											</Grid>
										</Grid>
									</form>
								</div>
							</Grid>
						</Grid>
						{jumpTo && <Redirect to={jumpTo}/>}
						<Link href="/home" variants="body2">
							<Button
								variant="contained"
								color="primary"
								size="large"
								className={classes.button}
								startIcon={<HomeIcon/>}
							>
								Home
							</Button>
						</Link>
					</div>
				);
			}}
		</userContext.Consumer>

	);
}
