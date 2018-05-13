import * as React from 'react';
import Grid from 'material-ui/Grid/Grid';

import TalkContainer from './containers/TalkContainer';

const styles = {
  root: {
    width: '80%',
    margin: 'auto',
  },
};

const App = (): JSX.Element => {
  return (
    <Grid container={true} style={styles.root} direction="row" justify="center">
      <Grid item={true} xs={12}>
        <TalkContainer />
      </Grid>
    </Grid>
  );
};

export default App;
