import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Grid from 'material-ui/Grid';

import { TalkAction, changeMessage, sendMessage, postMessage } from '../actions/talk';
import Message from '../dto/Message';
import InputTextPanel from '../components/InputTextPanel';
import MessageComponentList from '../components/MessageComponentList';

interface Props {
  messageText?: string;
  messageLog?: Message[];
  onChangeMessage?: (message: string) => void;
  sendMessage?: (message: string) => void;
}

class TalkContainer extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <Grid container={true} direction="column">
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

export default connect(mapStateToProps, mapDispatchToProps)(TalkContainer);
