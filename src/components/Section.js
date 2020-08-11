import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { themeColors } from '../utils/themes';
import '../stylesheets/style.scss';
import Todos from './Todos/Todos';

export class Section extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} maxWidth="md" >
        <Typography component="div" 
          style={{ backgroundColor: themeColors.f1color, 
          height: '100vh'}}>
            <div className="section">
              <h2>TODO CHECKLIST</h2>
              <Todos/>
            </div>
        </Typography>
      </Container>
    </React.Fragment>
    )
  }
}

export default Section
