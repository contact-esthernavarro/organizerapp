import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { themeColors } from '../utils/themes';

export class Section extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} maxWidth="lg">
        <Typography component="div" 
          style={{ backgroundColor: themeColors.f1color, 
          height: '100vh', 
          color: themeColors.f4color }} >
          <h1>Section</h1>
        </Typography>
      </Container>
    </React.Fragment>
    )
  }
}

export default Section
