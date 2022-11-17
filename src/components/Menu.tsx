import React from 'react';
import MenuSection from './MenuSection';
import Navigation from './Navigation';


const Menu = () => {
      return (
        <div className="bg-gray-900 sticky flex flex-col top-0 bottom-0 left-0 h-screen w-32">
	  <img class-name="pt-1 inline-block" alt="brand-logo" src="./logo.png"/>
          <MenuSection styles="border-solid border-b border-gray-600"/>
          <Navigation/>
          <MenuSection/>
        </div>
      );
};

export default Menu;
