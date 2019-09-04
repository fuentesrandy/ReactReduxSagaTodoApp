import { createLogger } from "redux-logger";



// Example to show how to create a middleware
// const logger = store => next => action => {
//     console.group(action.type);
//     console.log("The action: ", action);
//     const result = next(action);
//     console.log("The new state: ", store.getState());
//     console.groupEnd();
//     return result;
//   };

//   export default logger;


// use 3rd party middleware
const logger = createLogger({
  titleFormatter: (action, time, took) => {
    return `$${action.type}  (took ${took.toFixed(2)} ms)`;
  }
});

export default logger;
