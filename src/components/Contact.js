import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, TextField, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 2,
        paddingTop: theme.spacing(15),
    },
    textFields:{
      margin: 25,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '75%',
    },
    sendButton:{
      marginRight: '12.5%',
      float: 'right',
    },
    grid: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
}));

function Contact() {
  const classes = useStyles();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleSubmit = (event) =>{   
    event.preventDefault();
    const urlEmail = "mailto:contato-linea@linea.gov.br"+
    "&subject="+formData.subject+
    "&body="+
    "<b>Nome</b>: "+formData.name+
    "<br/> <b>Email</b>: "+formData.email+
    "<br/><br/> <b>Mensagem</b>: "+formData.message.replace(/\r?\n/g, '<br/>');
    window.open(urlEmail);
  }

  return (
    <div className={classes.root}>
      <Container>

          {/* <Grid justify="center" alignItems="center"> */}

          <Grid container direction="row" 
          justify="center"
          alignItems="center"
          item xs={8}
          className={classes.grid}
          >



          <Typography variant="h4" align="center" gutterBottom>
            Contact us
          </Typography>
          {/* <hr className={classes.lineHeader} /> */}
          
          <form className={classes.form} autoComplete="off"
          onSubmit={handleSubmit}>

            <div className={classes.textFields}>
              <TextField required id="textFieldName" type="text" variant="outlined"
              value={formData.name} onChange={(event) => setformData({ ...formData, name: event.target.value})}
              label="Name" placeholder="Name" fullWidth={true} size="small"/>
            </div>

            <div className={classes.textFields}>
              <TextField required id="textFieldEmail" type="email" variant="outlined"
              value={formData.email} onChange={(event) => setformData({ ...formData, email: event.target.value})}
              label="Email" placeholder="Email" fullWidth={true} size="small"/>
            </div>

            <div className={classes.textFields}>
              <TextField required id="textFieldSubject" type="text" variant="outlined"
              value={formData.subject} onChange={(event) => setformData({ ...formData, subject: event.target.value})}
              label="Subject" placeholder="Subject" fullWidth={true} size="small"/>
            </div>

            <div className={classes.textFields}>
              <TextField required id="textFieldMessage" type="text" variant="outlined"
              value={formData.message} onChange={(event) => setformData({ ...formData, message: event.target.value})}
              multiline={true} rows="8"  rowsMax="8" fullWidth={true} size="small"
              label="Message" placeholder="Message" />
            </div>

            <Button variant="contained" color="primary" type="submit"

            className={classes.sendButton} disableElevation>
              <EmailIcon/>&nbsp;Submit
            </Button>
          </form>




          </Grid>

        
          {/* </Grid> */}
          

      </Container>
      
    </div>
  );
}

export default Contact;
