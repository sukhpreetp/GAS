import React, {useContext, useEffect} from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {mainListItems, secondaryListItems} from "./studentListItems";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {getApi, postApi, putApi} from "./Api";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {userContext} from "./userContext";
import {toast} from "react-toastify";


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

	form: {
		padding: '20px',
		marginTop: '70px',
	}
}));

export default function Dashboard() {
	const {user} = useContext(userContext);
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [topics, setTopics] = React.useState([]);
	const [topic, setTopic] = React.useState();
	const [canDoFrontend, setCanDoFrontend] = React.useState(false);
	const [canDoBackend, setCanDoBackend] = React.useState(false);
	const [role, setRole] = React.useState(false);
	// Send get users api and set rows in state.
	useEffect(() => {
		getApi('/topics').then(data => setTopics(data));
	}, []);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleTopicChange = (event) => {
		for (let i in topics) {
			if (topics[i].id === event.target.value) {
				setTopic(topics[i]);
				checkCanDo(topics[i]);
				break;
			}
		}
	}

	const handleRoleChange = (event) => {
		setRole(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if(!role){
			return;
		}
		const body = {
			topic:{
				id: topic.id,
				name: topic.name,
			},
			role,
		};
		//Send api request in POST method.
		postApi("/users/" + user.id + "/topics", body).then((res) => {
			//Use the response data.
			if (res.result === "success") {
				toast.success("You have successfully enrolled in the topic.", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
				});
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
	}

	const checkCanDo = (topic) => {
		const userSkills = user.skills?user.skills:[];
		setCanDoBackend(topic.backend.skills.every(s => userSkills.includes(s)));
		setCanDoFrontend(topic.frontend.skills.every(s => userSkills.includes(s)));
	}

	return (
		<div className={classes.root}>
			<CssBaseline/>
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
						<MenuIcon/>
					</IconButton>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}
					>
						Join Topics
					</Typography>

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
						<ChevronLeftIcon/>
					</IconButton>
				</div>
				<Divider/>
				<List>{mainListItems}</List>
				<Divider/>
				<List>{secondaryListItems}</List>
			</Drawer>
			<main className={classes.content}>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								id="outlined-select-currency"
								select
								label="Topic"
								onChange={handleTopicChange}
								helperText="Please select a topic"
								variant="outlined"
								fullWidth
							>
								{topics.map((topic) => (
									<MenuItem key={topic.id} value={topic.id}>
										{topic.name}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										Frontend Requirement
									</Grid>
									<Grid item xs={12}>
										<List>
											{topic && topic.frontend.skills.map(skill => (
												<ListItem>
													<ListItemText primary={skill}/>
												</ListItem>
											))}
										</List>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										Backend Requirement
									</Grid>
									<Grid item xs={12}>
										<List>
											{topic && topic.backend.skills.map(skill => (
												<ListItem>
													<ListItemText primary={skill}/>
												</ListItem>
											))}
										</List>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<FormLabel component="legend">Role</FormLabel>
							<RadioGroup name="role" onChange={handleRoleChange}>
								<FormControlLabel value="frontend" disabled={!canDoFrontend} control={<Radio/>}
												  label="Frontend"/>
								<FormControlLabel value="backend" disabled={!canDoBackend} control={<Radio/>}
												  label="Backend"/>
							</RadioGroup>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								disabled={!role}
							>
								Submit the preference
							</Button>
						</Grid>
					</Grid>
				</form>
			</main>
		</div>
	);
}
