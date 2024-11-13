import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-dark text-light py-8 px-32 font-medium'>
      <div className='flex items-center justify-between'>
        <div>
          <span>&copy; 2023 All Rights Reserved.
          </span>
          <div className='flex items-center'>Build With <span className='text-primary text-2xl px-1' >&#9825;</span>
          by&nbsp;<Link href="https://devdreaming.com/about" className='underline'>CodeBucks</Link> </div>
        </div>
        <div>
          <p>Designed and Developed by <a href="https://github.com/tranchung163/my-portforlio" target="_blank" rel="noopener noreferrer" className='underline'>Ngoc Chung Tran</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer