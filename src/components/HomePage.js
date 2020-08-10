import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#86bbbd', height: '100vh' }} />
        <h1>HOME PAGE </h1>
      </Container>
    </React.Fragment>
    )
  }
}

export default HomePage
