import React from 'react';
import NaviButton from './NaviButton'


const Navigation = () => 
        <div className="flex-1">
          <NaviButton title="About"/>
          <NaviButton title="Skills"/>
          <NaviButton title="Work"/>
          <NaviButton title="Contact"/>
        </div>;

export default Navigation;
