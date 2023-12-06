import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MissedIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.033 11.133a.615.615 0 01-.224-.042.463.463 0 01-.192-.141L3.2 6.55v2.783a.485.485 0 01-.5.5.484.484 0 01-.5-.5v-3.9a.58.58 0 01.175-.425.58.58 0 01.425-.175h3.9a.486.486 0 01.5.5.485.485 0 01-.5.5H3.9l4.133 4.134L12.75 5.25a.48.48 0 01.7 0c.1.1.15.217.15.35 0 .133-.05.256-.15.367l-5 4.983a.464.464 0 01-.191.141.62.62 0 01-.226.042z"
        fill="#EB5757"
      />
    </Svg>
  );
}

export default MissedIcon;
