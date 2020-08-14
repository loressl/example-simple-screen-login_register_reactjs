import React, {useState} from 'react';
import {Button , Dialog, DialogActions,
        DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import Input from '../Input';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function ForgotDialog({openDialog, handleCloseDialog}){
    const [email, setEmail]= useState('');
    const [error, setError] = useState('');

    function handleChange(e){
        setEmail(e.target.value);
        if(!emailRegex.test(e.target.value)){
            setError("Email address is not valid");
        }else
            setError('');
    }

    function handleCancel(e){
        e.preventDefault();
        handleCloseDialog();
        setError('');
    }

    function handleSend(e){
        e.preventDefault();
        handleCloseDialog();
        setError('');
        console.log(email);
    }
    
    return(
        <>
            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Forgot Password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Enter your email
                    </DialogContentText>
                    <Input
                        error={error}
                        placeholder="Email"
                        type="email"
                        name="email"
                        handleChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleSend} variant="outlined">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ForgotDialog;