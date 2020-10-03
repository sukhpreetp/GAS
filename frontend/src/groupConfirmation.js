import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {postApi} from "./Api";
import {toast} from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateGroup(props) {
	const useStyles = makeStyles((theme) => ({
		icon: {
			color: 'white'

		},
		appBar: {
			position: 'relative',
		},
		title: {
			marginLeft: theme.spacing(2),
			flex: 1,
		},
		content: {
			padding: '20px',
		},
	}));

	const [open, setOpen] = React.useState(false);
	const [groupName, setGroupName] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleCreate = () => {
		if (groupName) {
			const body = [{
				groupName,
				members: props.userList,
			}];
			//Send api request in POST method.
			postApi("/topics/" + props.topic.id + "/groups", body).then((res) => {
				//Use the response data.
				if (res.result === "success") {
					toast.success("You have successfully created a group.", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
					});
					setOpen(false);
				} else {
					toast.error("Submission failed.", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
					});
					setOpen(false);
				}
			});
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleGroupNameChange = (event) => {
		setGroupName(event.target.value);
	};

	const classes = useStyles();
	return (
		<div>
			<IconButton aria-label="Create Group" onClick={handleClickOpen}>
				<GroupAddIcon className={classes.icon} fontSize="large"/>
			</IconButton>
			<Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon/>
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Confirm Group Creation
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid container spacing={3} className={classes.content}>
					<Grid item xs={12}>
						<TextField
							label="Group Name"
							onChange={handleGroupNameChange}
							helperText="Name the group"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={handleCreate}
						>
							Create
						</Button>
					</Grid>
				</Grid>
			</Dialog>
		</div>
	);
}
