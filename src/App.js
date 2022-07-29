import React from "react";
import Turtle from "./Turtle";

const App = () => {
  const checkDeltaY = (e) => {
    console.log(e.deltaY);
  };

  return (
    <Turtle onWheelHandler={checkDeltaY} throttleTimer={300}>
      <div>asdasdasd</div>
    </Turtle>
  );
};

export default App;
