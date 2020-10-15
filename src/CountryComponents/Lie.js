import * as React from "react";

function SvgLie(props) {
  return (
    <svg viewBox="0 0 2 4" fill="none" {...props}>
      <path
        id="LIE"
        opacity={0.7}
        d="M1 1L1.5 2.5V3.5H0L0.5 3L0 2L0.5 1V0.5L1 1Z"
        fill="#FF6D6D"
        fillOpacity={0.9}
      />
    </svg>
  );
}

export default SvgLie;
