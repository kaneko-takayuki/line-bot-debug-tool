import * as React from 'react';
import Grid from 'material-ui/Grid';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import Message from '../dto/Message';

interface Props {
  classes: any;
  message: Message;
}

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 15,
  },
  boldText: {
    'font-weight': 900,
  },
  paper: {
    backgroundColor: '#4B8A08',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    color: '#DDDDDD',
  },
};

const dateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

class MessageComponent extends React.Component<Props, null> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Grid container={true} className={classes.root} direction="column">
        {/* ユーザ名 */}
        <Grid item={true} xs={12} className={classes.boldText}>
          {this.props.message.user}
        </Grid>

        {/* メッセージ */}
        <Grid item={true} xs={12}>
          <Paper className={classes.paper}>
            {this.props.message.text}
          </Paper>
        </Grid>

        {/* 送信日時 */}
        <Grid item={true} xs={12}>
          {dateToString(this.props.message.date)}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MessageComponent);
