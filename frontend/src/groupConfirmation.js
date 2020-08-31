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

export default function CreateGroup() {
    const useStyles = makeStyles((theme) => ({
        icon: {
            color: 'white'
          
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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirm Group Creation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Summary
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>Cancel</Button>
        <Button>Create</Button>
      </ButtonGroup>
        </DialogActions>
      </Dialog>
    </div>
  );
}
