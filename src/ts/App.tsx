import * as React from 'react';
import Grid from 'material-ui/Grid/Grid';
import { withStyles } from 'material-ui/styles';

import TalkContainer from './containers/TalkContainer';

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface Props {
  classes: any;
}

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <Grid container={true} className={classes.root}>
        <Grid item={true} xs={12}>
          <TalkContainer />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
