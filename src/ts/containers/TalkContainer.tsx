import * as React from 'react';
import { connect } from 'react-redux';
import {compose, Dispatch} from 'redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { TalkAction, changeMessage, sendMessage, postMessage } from '../actions/talk';
import Message from '../dto/Message';
import InputTextPanel from '../components/InputTextPanel';
import MessageComponentList from '../components/MessageComponentList';

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface Props {
  classes: any;
  messageText?: string;
  messageLog?: Message[];
  onChangeMessage?: (message: string) => void;
  sendMessage?: (message: string) => void;
}

class TalkContainer extends React.Component<Props> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Grid container={true} className={classes.root}>
        <Grid item={true} xs={12}>
          <InputTextPanel
            messageText={this.props.messageText}
            onChangeMessage={this.props.onChangeMessage}
            sendMessage={this.props.sendMessage}
          />
        </Grid>

        <Grid item={true} xs={12}>
          <MessageComponentList messageLog={this.props.messageLog} />
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state: any) {
  return state.talkReducer;
}

function mapDispatchToProps(dispatch: Dispatch<TalkAction>) {
  return {
    onChangeMessage: (message: string) => {dispatch(changeMessage(message));},
    sendMessage: (messageText: string) => {
      dispatch(sendMessage(messageText));
      dispatch(postMessage(messageText));
      dispatch(changeMessage(''));
    },
  };
}

// connect(mapStateToProps, mapDispatchToProps)(TalkContainer);
// export default withStyles(styles)(TalkContainer);


// export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(TalkContainer);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TalkContainer);
