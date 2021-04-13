
import React from 'react';

interface MenuSectionProps {
    styles?: string;
}

const MenuSection = ({styles} : MenuSectionProps) => {
      return (
        <div className={'flex-1 ' + styles}>
        </div>
      );
};

export default MenuSection;