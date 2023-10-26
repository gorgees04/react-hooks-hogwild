import React from "react";
import Nav from "./Nav";
import Content from "./Content";

import hogs from "../porkers_data";
console.log(hogs);
function App() {
  return (
    <div className="App">
      <Nav />
      <Content data={hogs} />
    </div>
  );
}

export default App;
