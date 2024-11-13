import React from 'react';
import { CircularText2 } from './Icons';
import Link from 'next/link';

export const HireMe = () => {
  return (
    <div className='fixed left-1 bottom-8 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText2 className={"fill-dark animate-spin-slow"} /> 
        <Link 
          href="mailto:tranchung163@gmail.com" 
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark' 
        >
        HireMe
        </Link>
        </div>
        </div>
  )
}
