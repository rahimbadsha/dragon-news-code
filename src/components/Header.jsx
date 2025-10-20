import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-2 mt-5'>
            <img className='w-[350px]' src={logo} alt='' />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-semibold text-accent'>{format(new Date(), "EEEE , MMMM MM, Y")}</p>
        </div>
    );
};

export default Header;