import * as _ from 'lodash';
import * as React from 'react';
import Grid from 'material-ui/Grid';

import Message from '../dto/Message';
import MessageComponent from './MessageComponent';

interface Props {
  messageLog: Message[];
}

const styles = {
  root: {
    width: '80%',
    margin: 'auto',
  },
  child: {
    width: '100%',
    margin: 'auto',
  },
};

export default class MessageComponentList extends React.Component<Props, null> {
  render(): JSX.Element {
    return (
      <Grid container={true} style={styles.root}>
        <Grid item={true} style={styles.child}>
          {_.map(this.props.messageLog, (message: Message, i: number) => <MessageComponent key={i} message={message} />).reverse()}
        </Grid>
      </Grid>
    );
  }
}
