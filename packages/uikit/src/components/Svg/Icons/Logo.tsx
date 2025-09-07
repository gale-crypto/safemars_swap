import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 393 420" {...props}>
      <image href="/images/safemars.png" width={393}/>
    </Svg>
  );
};

export default Icon
