import * as React from "react";

function SvgPrt(props) {
  return (
    <svg viewBox="0 0 15 28" fill="none" {...props}>
      <path
        id="PRT"
        d="M3.5 0.5L5.5 0H7L7.5 0.5L7 1.5H10L12.5 0.5L14 1.5L15 2.5L14.5 4L12.5 7L12 10.5V13H9L10.5 15.5L11 16L10.5 18L11 20.5L12 22L10.5 22.5L9.5 23.5V26L9 27L7 27.5L4.5 27H2.5L3.5 24.5L4 21V19.5H2L1.5 18.5L0.5 18L1 16L1.5 14L2 14.5L2.5 12.5L3.5 10.5L4 6.5L3.5 3V1V0.5Z"
        fill="#FF6D6D"
        fillOpacity={0.9}
      />
    </svg>
  );
}

export default SvgPrt;
