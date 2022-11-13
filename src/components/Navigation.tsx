import React from 'react';
import NaviButton from './NaviButton'


const Navigation = () =>
        <div className="flex flex-col justify-center">
          <NaviButton link="#about" title="About"/>
          <NaviButton link="#technologies" title="Skills"/>
          <NaviButton link="#about" title="Work"/>
          <NaviButton link="#about" title="Contact"/>
        </div>;

export default Navigation;
