export const throttle = (callbackFunction, timeLimit) => {
  let wait = false;

  return function () {
    if (!wait) {
      callbackFunction.apply(this, arguments);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, timeLimit);
    }
  };
};
