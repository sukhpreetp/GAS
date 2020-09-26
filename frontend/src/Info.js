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
import {mainListItems, secondaryListItems} from "./listItems";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {getApi, putApi} from "./Api";
import {userContext} from './userContext';
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
}));

export default function Dashboard() {
	const {user, setUser} = useContext(userContext);
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [skills, setSkills] = React.useState({frontend: [], backend: []});
	const [selectedSkills, setSelectedSkills] = React.useState(user && user.skills ? user.skills : []);
	const [currentUser, setCurrentUser] = React.useState(user);
	const [passwordChanged, setPasswordChanged] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleSkillChange = (event) => {
		let selected = [...selectedSkills];
		if (event.target.checked && !selected.includes(event.target.value)) {
			selected.push(event.target.value);
		} else if (!event.target.checked) {
			selected = selected.filter(s => s !== event.target.value);
		}
		setSelectedSkills(selected);
	}

	const handleFieldChange = (key) => (event) => {
		const user = Object.assign({}, currentUser);
		user[key] = event.target.value;
		setCurrentUser(user);
		if (key === 'password') {
			setPasswordChanged(true);
		}
	}

	// Send get skills api and set rows in state.
	useEffect(() => {
		getApi('/skills').then(data => setSkills(data));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.target); //Get submitted form data.
		//Build post body.
		const body = {
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			skills: selectedSkills,
		};
		if (passwordChanged) {
			body.password = data.get("password");
		}
		//Send api request in POST method.
		putApi("/users/" + currentUser.id, body).then((res) => {
			//Use the response data.
			if (res.result === "success") {
				toast.success("User has benn updated successfully.", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
				});
				const updatedUser = Object.assign({}, user);
				updatedUser.firstName = body.firstName;
				updatedUser.lastName = body.lastName;
				updatedUser.skills = [...body.skills];
				setUser(updatedUser);
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
						Your Information
					</Typography>
					<Link href="/home" variants="body2">
						<Button
							variant="contained"
							color="primary"
							size="large"
							className={classes.button}
						>
							<ExitToAppIcon/>
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
						<ChevronLeftIcon/>
					</IconButton>
				</div>
				<Divider/>
				<List>{mainListItems}</List>
				<Divider/>
				<List>{secondaryListItems}</List>
			</Drawer>

			<form className={classes.content} onSubmit={handleSubmit}>
				<div className={classes.appBarSpacer}/>
				<TextField variant="outlined" margin="normal" required fullWidth label="Student ID"
						   name="studentId" type="number" value={currentUser.studentId} disabled/>
				<TextField variant="outlined" margin="normal" required fullWidth label="Email" name="email"
						   type="Email" value={currentUser.email} disabled/>
				<TextField variant="outlined" margin="normal" required fullWidth label="Password"
						   name="password" type="password" value={currentUser.password} onChange={handleFieldChange('password')}/>
				<TextField variant="outlined" margin="normal" required fullWidth label="Firstname"
						   name="firstName" value={currentUser.firstName} onChange={handleFieldChange('firstName')}/>
				<TextField variant="outlined" margin="normal" required fullWidth label="Lastname"
						   name="lastName" value={currentUser.lastName} onChange={handleFieldChange('lastName')}/>
				<FormLabel component="legend">Frontend Skills</FormLabel>
				<FormGroup fullWidth row>
					{skills.frontend.map(skill =>
						<FormControlLabel
							control={<Checkbox checked={selectedSkills.includes(skill)}
											   onChange={handleSkillChange} name="skills" value={skill}/>}
							label={skill}
						/>
					)}
				</FormGroup>
				<FormLabel component="legend">Backend Skills</FormLabel>
				<FormGroup fullWidth row>
					{skills.backend.map(skill =>
						<FormControlLabel
							control={<Checkbox checked={selectedSkills.includes(skill)}
											   onChange={handleSkillChange} name="skills" value={skill}/>}
							label={skill}
						/>
					)}
				</FormGroup>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.save}
				>
					Save Student Information
				</Button>
			</form>
		</div>
	);
}
