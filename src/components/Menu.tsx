import React from 'react';
import MenuSection from './MenuSection';
import Navigation from './Navigation';


const Menu = () => {
      return (
        <div className="bg-gray-900 absolute flex flex-col bottom-0 left-0 h-screen w-32">
          <MenuSection styles="border-solid border-b border-gray-600"/>
          <Navigation/>
          <MenuSection/>
        </div>
      );
};

export default Menu;