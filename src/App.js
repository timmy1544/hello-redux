import React from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from './ButtonGroup.js';
import store from './store';

const App = () => {
  // const [tech] = useState("Redux");
  return [
    <HelloWorld key={1} tech={store.getState().tech} />,
    <ButtonGroup key={2} technologies={['React', 'Elm', 'React-redux']} />
  ];
};

export default App;
