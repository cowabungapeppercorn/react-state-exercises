import React from 'react';
import Box from './Box';

class Container extends React.Component {
  static defaultProps = {
    colors: ["red", "blue", "green", "orange", "purple", "pink", "black", "white", "indigo", "yellow", "grey", "turquoise"],
    numBoxes: 16
  }

  constructor(props) {
    super(props);
    this.state = { colors: Array.from({ length: props.numBoxes }, c => this.randomColor()) };
    this.handleClick = this.handleClick.bind(this);
  }

  randomColor() {
    return this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
  }

  randomIdx() {
    return Math.floor(Math.random() * this.props.numBoxes);
  }

  handleClick() {
    let changeIdx = this.randomIdx();
    this.setState(st => ({
      colors: st.colors.map((c, idx) => idx === changeIdx ? c = this.randomColor() : c)
    }));
  }

  render() {
    return (
      <div>
        <div>
          {this.state.colors.map(c => <Box color={c} />)}
        </div>
        <button onClick={this.handleClick}>Change One</button>
      </div>
    )
  }
}

export default Container;