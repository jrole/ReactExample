import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    clickHandler: PropTypes.func
  };

  handleClick = () => {
    const { value } = this.props;
    this.props.clickHandler(value);
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>{name}</button>
      </div>
    );
  }
}
