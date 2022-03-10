import React, { useState } from "react";
import { createStore } from 'redux';
import HelloWorld from "./HelloWorld";
import reducer from './reducers';

const initialState = {
  tech: 'React'
}
const store = createStore(reducer, initialState);

const App = () => {
  // const [tech] = useState("Redux");
  // return <HelloWorld tech={tech} />;
  return;
};

export default App;
