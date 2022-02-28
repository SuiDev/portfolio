import React from "react";

import { Bars } from "react-loader-spinner";

const LoadSpinner = () => (
  <>
    <Bars
      ariaLabel="loading-indicator"
      color="#BCE7FF"
      height={80}
      width={80}
    />
  </>
);

export default LoadSpinner;
