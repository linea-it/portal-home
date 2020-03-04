import React, { useState } from 'react';
import { Grid, Container, Typography, TextField, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Snackbar from '../../components/Snackbar/';
import styles from './styles';

function Contact() {
  const classes = styles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
      setOpen(true);
  };

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

  const [formData, setformData] = useState({
    name: "", email: "", subject: "", message: "", resultado:""
  });

  const [captcha, setCaptcha] = useState({
    valor1: Math.floor(Math.random() * 10), 
    valor2: Math.floor(Math.random() * 10),
  });
  

  const handleSubmit = (event) =>{   
    event.preventDefault();
    const resultadoCaptcha = (captcha.valor1 + captcha.valor2);
    if(resultadoCaptcha === parseInt(formData.resultado)){
      const urlEmail = "mailto:contato-linea@linea.gov.br"+
      "&subject="+formData.subject+
      "&body="+
      "<b>Nome</b>: "+formData.name+
      "<br/> <b>Email</b>: "+formData.email+
      "<br/><br/> <b>Mensagem</b>: </br>"+formData.message.replace(/\r?\n/g, '<br/>');
      window.open(urlEmail);
      setCaptcha({ 
        valor1: Math.floor(Math.random() * 10),
        valor2: Math.floor(Math.random() * 10)
      });
    }else{
      handleClick();
    }    
  }

  return (
    <div className={classes.initContainer}>
      <Container>
          <Grid 
          item xs={6}
          className={classes.grid}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Contact us
            </Typography>        
            <form autoComplete="off"
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

              <Grid container alignItems="flex-end">
                <Grid item xs={10}>
                  <div>
                    <TextField required id="textFieldResultado" type="number" variant="outlined"
                    value={formData.resultado} onChange={(event) => setformData({ ...formData, resultado: event.target.value})}
                    label={`Resultado de ${captcha.valor1} + ${captcha.valor2}: `} placeholder="Resultado" size="small"/>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" type="submit" disableElevation>
                    <EmailIcon/>&nbsp;Submit
                  </Button>
                </Grid>
              </Grid>
              
            </form>
          </Grid>
          <Snackbar open={open} handleClose={handleClose} />
      </Container>
    </div>
  );
}

export default Contact;
