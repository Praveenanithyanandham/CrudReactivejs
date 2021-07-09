import { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "./Components/Modal";
import React from 'react';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


// import { DataGrid } from '@material-ui/data-grid';
// import { useHistory } from 'react-router-dom';
  function Form() {

    const [name, setName] = useState("");
    const [Email, setemail] = useState("");
    const [mobile, setMobile] = useState("");
    const [EmployeeID, setEmployeeID] = useState("");
    const [list, setList] = useState([]);
    const submitForm = () => {
        setOpen(true);
        setList([
            ...list,
            { Fname: name, ID: EmployeeID, Email: Email, contact: mobile }
        ]);
    };
    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    return (
        <div className="App" style={{ marginLeft: "30px", marginTop: "20px", height: "430px" }}>

            <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                style={{ marginLeft: "15px" }}
            />
            <br />
            <br />
            <TextField
                id="filled-basic"
                label="Employee ID"
                variant="filled"
                value={EmployeeID}
                type="number"
                onChange={(e) => {
                    setEmployeeID(e.target.value);
                }}
                style={{ marginLeft: "13.5px" }}
            />
            <br />
            <br />

            <TextField
                id="filled-basic"
                label="Email Id"
                variant="filled"
                value={Email}
                type="Email"
                onChange={(e) => {
                    setemail(e.target.value);
                }}
                style={{ marginLeft: "13.5px" }}
            />
            <br />
            <br />

            <TextField
                id="filled-basic"
                label="Phone Number"
                variant="filled"
                value={mobile}
                type="number"
                onChange={(e) => {
                    setMobile(e.target.value);
                }}
                style={{ marginLeft: "13.5px" }}
            />
            <br />
            <br />

            
            <Button variant="outlined" color="primary"  onClick={submitForm}
                style={{ marginLeft: "20px" }}
                size="large"
                variant="contained"
                color="primary"
                >
        Create

      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to create?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
            <Button
                onClick={submitForm}
                style={{ marginLeft: "20px" }}
                size="large"
                variant="contained"
                color="primary"
            >
                delete
            </Button>
            

            {list.map((e) => {
                return (
                    <div
                        style={{
                            position: "relative",
                            left: "500px",
                            bottom: "300px"
                        }}
                    >
                        <div>Name:{e.Fname}</div>
                        <br />
                        <div>EmployeeID:{e.ID}</div>
                        <br />
                        <div>Email:{e.Email}</div>
                        <br />
                        <div>Mobile:{e.contact}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default Form;



