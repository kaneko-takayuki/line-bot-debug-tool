import * as _ from 'lodash';
import * as React from 'react';
import Grid from 'material-ui/Grid';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import Message from '../dto/Message';
import MessageComponent from './MessageComponent';

interface Props {
  classes: any;
  messageLog: Message[];
}

const styles = {
  root: {
    flexGrow: 1,
  },
  list: {
    maxHeight: 400,
    overflow: 'auto',
  },
};

class MessageComponentList extends React.Component<Props, null> {
  renderMessageComponent = (message: Message, i: number): JSX.Element => {
    return (
      <li key={i}>
        <MessageComponent message={message} />
      </li>
    );
  }

  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Grid container={true} direction="row" justify="center">
        <Grid item={true} xs={2} />
        <Grid item={true} xs={8}>
          <List className={classes.list} subheader={<li />}>
            {_.map(this.props.messageLog, this.renderMessageComponent).reverse()}
          </List>
        </Grid>
        <Grid item={true} xs={2} />
      </Grid>
    );
  }
}

export default withStyles(styles)(MessageComponentList);
