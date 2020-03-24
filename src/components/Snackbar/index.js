import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function Snackbar({open, handleClose}) {

    // const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpen(false);
    // };

    return (
        <div>
            <MuiSnackbar open={open} 
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                autoHideDuration={6000} 
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="warning">
                    O captcha está ausente ou errado!
                </Alert>
            </MuiSnackbar>
        </div>
    );

}

export default Snackbar;