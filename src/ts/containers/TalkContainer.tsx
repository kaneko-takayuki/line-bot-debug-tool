import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeMessage, TalkAction } from '../actions/talk';
import InputTextPanel from '../components/InputTextPanel';

interface Props {
  message?: string;
  onChangeMessage?: (message: string) => void;
}

class TalkContainer extends React.Component<Props> {
  render() {
    return (
      <InputTextPanel message={this.props.message} onChangeMessage={this.props.onChangeMessage} />
    );
  }
}

function mapStateToProps(state: any) {
  return state.talkReducer;
}

function mapDispatchToProps(dispatch: Dispatch<TalkAction>) {
  return {
    onChangeMessage: (message: string) => {dispatch(changeMessage(message));},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkContainer);
