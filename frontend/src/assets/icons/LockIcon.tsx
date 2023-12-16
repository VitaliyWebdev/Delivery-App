import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LockIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.308 21.5c-.499 0-.925-.177-1.278-.53a1.741 1.741 0 01-.53-1.278v-9.384c0-.499.177-.925.53-1.278.353-.353.779-.53 1.278-.53H7.5v-2c0-1.249.438-2.31 1.313-3.186C9.69 2.438 10.751 2 12 2c1.249 0 2.31.438 3.187 1.314.875.875 1.313 1.937 1.313 3.186v2h1.192c.499 0 .925.177 1.278.53.353.353.53.779.53 1.278v9.384c0 .499-.177.925-.53 1.278-.353.353-.779.53-1.278.53H6.308zm0-1.5h11.384a.3.3 0 00.221-.087.3.3 0 00.087-.22v-9.385a.3.3 0 00-.087-.222.3.3 0 00-.22-.086H6.307a.3.3 0 00-.221.086.3.3 0 00-.087.222v9.384a.3.3 0 00.087.221.3.3 0 00.22.087zM12 16.75c.486 0 .899-.17 1.24-.51.34-.341.51-.754.51-1.24s-.17-.899-.51-1.24c-.341-.34-.754-.51-1.24-.51s-.899.17-1.24.51c-.34.341-.51.754-.51 1.24s.17.899.51 1.24c.341.34.754.51 1.24.51zM9 8.5h6v-2c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0012 3.5c-.833 0-1.542.292-2.125.875A2.893 2.893 0 009 6.5v2z"
        fill="#000"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default LockIcon;