import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particleconfig";

const Particlesbg = (props) => {
  return (
    <div >
      <Particles params={particlesConfig} />
      {props.children}
    </div>
  );
};

export default Particlesbg;

