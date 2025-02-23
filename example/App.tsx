import React from "react";
import Button from "../src";

export default () => {
  return (
    <div>
      <h1>React Component Library Preview</h1>
      <Button label="Click Me!" onClick={() => alert("Button clicked!")} />
    </div>
  );
};
