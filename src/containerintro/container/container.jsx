import React from "react";
import PropTypes from "prop-types";
import Button from "../../componentintro/component/button";

export default class Container extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    buttonname: PropTypes.string
  };

  render() {
    const { buttonname, title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <Button name={buttonname} />
      </div>
    );
  }
}
