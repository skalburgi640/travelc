import React, { PureComponent } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import DatePic from './components/DatePic';

class App extends PureComponent {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <DatePic />
        </Grid>
      </Grid>
    );
  }
}

export default App;
