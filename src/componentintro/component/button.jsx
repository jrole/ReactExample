import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        <button>{name}</button>
      </div>
    );
  }
}
