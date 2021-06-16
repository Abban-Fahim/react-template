import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* If you need one: */
      /* <header></header> */}
      <Switch>
        <Route
          path="/"
          children={
            {
              /* Main component */
            }
          }
        />
        {/* <Route path="*" children={404page} /> */}
      </Switch>
    </>
  );
}

export default App;
