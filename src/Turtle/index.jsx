import React from "react";

import { throttle } from "./throttle";

const Turtle = ({ onWheelHandler, throttleTimer, children }) => {
  const onWheel = React.useMemo(
    () => throttle(onWheelHandler, throttleTimer),
    [onWheelHandler, throttleTimer]
  );

  return <div onWheel={onWheel}>{children}</div>;
};

export default Turtle;
