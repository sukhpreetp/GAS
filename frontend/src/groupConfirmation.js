import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateGroup() {
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
     
      }));
      
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
       <IconButton aria-label="Create Group" onClick={handleClickOpen} >
            <GroupAddIcon className={classes.icon} fontSize="large" />
          </IconButton>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Confirm Group Creation
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Create
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
      {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirm Group Creation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Summary
          </DialogContentText>
          <Divider />
          <DialogContentText>
            
          </DialogContentText>
          <DialogContentText>
            Front-End Developers:
          </DialogContentText>
          <DialogContentText>
            Back-End Developers:
          </DialogContentText>
          <DialogContentText>
            Total # of Group Members:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>Cancel</Button>
        <Button>Create</Button>
      </ButtonGroup>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
