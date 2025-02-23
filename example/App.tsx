import React from "react";
import { TntButton } from "../src";

export default () => {
  return (
    <div>
      <h1>React Component Library Preview</h1>
      <TntButton label="Click Me!" onClick={() => alert("Button clicked!")} />
    </div>
  );
};
