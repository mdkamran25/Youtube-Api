import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Link className='float-right text-xl  font-light underline text-blue-700 hover:text-blue-900' href="/">SignIn</Link>
    </div>
  )
}

export default Navbar
