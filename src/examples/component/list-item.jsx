import React from "react";
import PropTypes from "prop-types";

export default class ListItem extends React.Component {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    const { value } = this.props;
    return <li>{value}</li>;
  }
}
