import "./styles.css";
import Button from "./componentintro/component/button";
import Container from "./containerintro/container/container";
import InputList from "./examples/container/input-list";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/*
      <Button name="My First Button" />
      */}
      {/*
      <Container title="My First Container" buttonname="Button" />
      */}
      <InputList />
    </div>
  );
}
