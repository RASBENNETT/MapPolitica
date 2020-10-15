import * as React from "react";

function SvgLux(props) {
  return (
    <svg viewBox="0 0 4 5" fill="none" {...props}>
      <path
        id="LUX"
        d="M2 1L3.5 0.5L3 1.5L3.5 2.5V4L4 5H3.5L3 4.5H1L0.5 4L1 2.5L2 1Z"
        fill="#FF79B9"
        fillOpacity={0.9}
      />
    </svg>
  );
}

export default SvgLux;
