import React from 'react';
import Logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'
const Top = () => {
  return (
  <div className='component' >
    <div className='nav'>
        <div>
            <img src={Logo}/>
        </div>
        <div>
            <img src={menu}/>
        </div>
  </div>
<div className='text'>
  <h1>Say hello to <br /> ReactJS</h1>
<p>You will learn how to use <br/>the most popular frontend library,<br /> and become a super Ninja developer.</p>
<button> <strong>Awesome!</strong> </button>
</div>
  </div>
    )
};

export default Top;
