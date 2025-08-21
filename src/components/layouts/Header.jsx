import React from 'react'
import Logo from '../atoms/Logo'
import Navbar from './Navbar'


function Header() {
  return (
    <div className='header'>
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Header