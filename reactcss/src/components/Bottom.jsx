import React from "react";
import Declarative from '../images/icon1.png';
import Components from '../images/icon2.png';
import Singleway from '../images/icon3.png';
import jsx from '../images/icon4.png'

const Bottom = () => {
  return (
  <div className="botContainer">
  <div>
      <img src={Declarative} alt="" /> 
      <h2>Declarative</h2>
        <p>React makes it <br />painless to create <br />interactive UIs.</p>
  </div>
<div>
      <img src={Components} alt="" />
    <h2>Components</h2>
    <p>Build encapsulated <br />components that <br />manage their state</p>
</div>
    <div>
      <img src={Singleway} alt="" />
      <h2>Single-Way</h2>
      <p>A set of immutable <br />values are passed to <br />the component's</p>
    </div>
    <div>
      <img src={jsx} alt="" />
      <h2>JSX</h2>
      <p>Statically-typed,<br />designed to run on <br />modern browsers</p>
    </div>
  </div>
    )
};

export default Bottom;
