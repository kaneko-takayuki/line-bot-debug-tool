import * as React from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

interface Props {
  message: string;
  onChangeMessage: (message: string) => void;
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
  button: {
    margin: 5,
  },
};

export default class InputTextPanel extends React.Component<Props, null> {
  onChange = (event): void => {
    this.props.onChangeMessage(event.target.value);
  }

  render(): JSX.Element {
    return (
      <Grid container={true} style={styles.root} direction="column">
        {/* メッセージ入力ボックス */}
        <Grid item={true} style={styles.child} xs={10}>
          <Grid container={true} direction="row" justify="center">
            <Grid item={true} xs={12}>
              <TextField
                style={styles.child}
                multiline={true}
                rows="3"
                margin="normal"
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* 送信ボタン */}
        <Grid item={true} style={styles.child} xs={2}>
          <Grid container={true} direction="row" justify="center">
            <Grid item={true} xs={12}>
              <Button style={styles.button} variant="raised" color="primary">
                送信
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
