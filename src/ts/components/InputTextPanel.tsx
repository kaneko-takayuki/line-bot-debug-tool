import * as React from 'react';

interface Props {
  message: string;
  onChangeMessage: (message: string) => void;
}

export default class InputTextPanel extends React.Component<Props, null> {
  onChange = (event) => {
    this.props.onChangeMessage(event.target.value);
  }

  render(): JSX.Element {
    console.log(this.props);
    return (
      <form>
        <label>
          Message:
          <input type="text" value={this.props.message} onChange={this.onChange} />
        </label>
      </form>
    );
  }
}
