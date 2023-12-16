import * as React from "react";
import Svg, { Path } from "react-native-svg";

function OutgoingIcon(props) {
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
        d="M3.25 12.75a.48.48 0 010-.7L10.8 4.5H6.667a.484.484 0 01-.5-.5.484.484 0 01.5-.5H11.9a.58.58 0 01.425.175.58.58 0 01.175.425v5.233a.485.485 0 01-.5.5.486.486 0 01-.5-.5V5.2l-7.567 7.567a.452.452 0 01-.333.133.48.48 0 01-.35-.15z"
        fill="#27AE60"
      />
    </Svg>
  );
}

export default OutgoingIcon;
