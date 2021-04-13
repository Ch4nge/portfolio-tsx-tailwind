import React from 'react';

interface Props {
    title: string
}

const NaviButton = (props : Props) => 
        <a className="transition duration-500 text-center align-middle text-gray-300 w-auto block border-b border-gray-600 border-solid pb-3 pt-3 hover:text-green-300">
            { props.title }
        </a>;

export default NaviButton;
