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

/**
 * Date型を文字列に変換する
 * @param {Date} date
 * @returns {string}
 */
const dateToString = (date: Date) => {
  const year = ('0000' + date.getFullYear()).slice(-4);
  const month = ('00' + (date.getMonth() + 1)).slice(-2);
  const day = ('00' + date.getDate()).slice(-2);
  const hours = ('00' + date.getHours()).slice(-2);
  const minutes = ('00' + date.getMinutes()).slice(-2);
  const seconds = ('00' + date.getSeconds()).slice(-2);

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
