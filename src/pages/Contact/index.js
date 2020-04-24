import React, { useState } from 'react';
import {
  Grid, Container, Typography, TextField, Button, Breadcrumbs, Link,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import styles from './styles';

function Contact() {
  const classes = styles();

  const [formData, setformData] = useState({
    name: '', email: '', subject: '', message: '', resultado: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlEmail = `${'mailto:contato-linea@linea.gov.br'
    + '&subject='}${formData.subject
    }&body=`
    + `<b>Nome</b>: ${formData.name
    }<br/> <b>Email</b>: ${formData.email
    }<br/><br/> <b>Mensagem</b>: </br>${formData.message.replace(/\r?\n/g, '<br/>')}`;
    window.open(urlEmail);
  };

  return (
    <div className={classes.initContainer}>
      <Container>
        <Grid
          item
          xs={12}
          className={classes.grid}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Contact us</Typography>
          </Breadcrumbs>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={classes.form}
          >

            <div className={classes.textFields}>
              <TextField
                required
                id="textFieldName"
                type="text"
                variant="outlined"
                value={formData.name}
                onChange={(event) => setformData({ ...formData, name: event.target.value })}
                label="Name"
                placeholder="Name"
                fullWidth
                size="small"
              />
            </div>

            <div className={classes.textFields}>
              <TextField
                required
                id="textFieldEmail"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={(event) => setformData({ ...formData, email: event.target.value })}
                label="Email"
                placeholder="Email"
                fullWidth
                size="small"
              />
            </div>

            <div className={classes.textFields}>
              <TextField
                required
                id="textFieldSubject"
                type="text"
                variant="outlined"
                value={formData.subject}
                onChange={(event) => setformData({ ...formData, subject: event.target.value })}
                label="Subject"
                placeholder="Subject"
                fullWidth
                size="small"
              />
            </div>

            <div className={classes.textFields}>
              <TextField
                required
                id="textFieldMessage"
                type="text"
                variant="outlined"
                value={formData.message}
                onChange={(event) => setformData({ ...formData, message: event.target.value })}
                multiline
                rows="8"
                rowsMax="8"
                fullWidth
                size="small"
                label="Message"
                placeholder="Message"
              />
            </div>

            <Grid container alignItems="flex-end">
              <Grid item xs={10} />
              <Grid item xs={2}>
                <Button variant="contained" color="primary" type="submit" disableElevation>
                  <EmailIcon />
&nbsp;Submit
                </Button>
              </Grid>
            </Grid>

          </form>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
