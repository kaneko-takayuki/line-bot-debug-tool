import * as React from 'react';
import { Paper } from 'material-ui';

import Message from '../dto/Message';

interface Props {
  message: Message;
}

const styles = {
  root: {
    width: '80%',
    backgroundColor: '#4B8A08',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    color: '#DDDDDD',
  },
};

export default class MessageComponent extends React.Component<Props, null> {
  render(): JSX.Element {
    return (
      <Paper style={styles.root}>
        {this.props.message.text}
      </Paper>
    );
  }
}
