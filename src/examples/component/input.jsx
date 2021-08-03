import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    changeHandler: PropTypes.func
  };

  handleChange = (event) => {
    this.props.changeHandler(event.target.value);
  };

  render() {
    const { name, value } = this.props;
    return (
      <div>
        <label>{name}</label>
        <input onChange={this.handleChange} value={value} type="text" />
      </div>
    );
  }
}
