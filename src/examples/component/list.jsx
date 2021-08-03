import React from "react";
import PropTypes from "prop-types";
import ListItem from "./list-item";
import styles from "./list.module.scss";

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    type: PropTypes.string
  };

  getListItems = () => {
    const { items } = this.props;
    return items.map((item, i) => <ListItem value={item} key={i} />);
  };

  getType = () => {
    const { type } = this.props;
    let listType = "";
    switch (type) {
      case "ol":
        listType = "ol";
        break;
      default:
        listType = "ul";
        break;
    }
    return listType;
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        {this.getType() === "ol" && (
          <ol className={styles.listComponent}>
            {items.map(function (item, i) {
              return <ListItem value={item} key={i} />;
            })}
          </ol>
        )}
        {this.getType() !== "ol" && (
          <ul className={styles.listComponent}>{this.getListItems()}</ul>
        )}
      </div>
    );
  }
}
