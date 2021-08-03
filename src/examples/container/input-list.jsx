import React from "react";
import Button from "../component/button";
import Input from "../component/input";
import List from "../component/list";

export default class InputList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      items: [],
      listType: "ul"
    };
  }

  /*
  componentDidMount = () => {
    this.loadData();
  };
  */

  loadData = () => {
    const self = this;
    fetch("https://www.superheroapi.com/api.php/4315159728527442/search/super")
      .then((res) => {
        return res.json();
      })
      .then(function (myJson) {
        self.setState({
          items: myJson.results.map((item) => item.name)
        });
      })
      .catch((error) => console.log(error));
  };

  handleInputChange = (newItemText) => {
    this.setState({
      newItem: newItemText
    });
  };

  handleAddButtonClick = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, this.state.newItem],
      newItem: ""
    }));
  };

  handleClearButtonClick = () => {
    this.setState(() => ({
      items: []
    }));
  };

  handleChangeButtonClick = () => {
    this.setState((prevState) => ({
      listType: prevState.listType === "ul" ? "ol" : "ul"
    }));
  };

  render() {
    return (
      <div>
        <h2>Our List</h2>
        <Input
          changeHandler={this.handleInputChange}
          name="New Item"
          value={this.state.newItem}
        />
        <List type={this.state.listType} items={this.state.items} />
        <div className="button-container">
          <Button
            name="Change List Type"
            clickHandler={this.handleChangeButtonClick}
          />
          <Button
            name="Clear List"
            clickHandler={this.handleClearButtonClick}
          />
          <Button name="Add Item" clickHandler={this.handleAddButtonClick} />
        </div>
      </div>
    );
  }
}
