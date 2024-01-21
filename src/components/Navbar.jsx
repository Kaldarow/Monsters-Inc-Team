import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h2 className='logo'>Monsters Inc</h2>
    <div className='navigation '>
      <NavLink to={"HomePage"}>
        <button className='btn-nav'>Home</button>
        </NavLink>
      <NavLink to={"AddEmployee"}>
      <button className='btn-nav'>Add Emplyee</button>
        </NavLink>
      <NavLink to={"Reguests"}>
      <button className='btn-nav'>Requests</button>
        </NavLink>
    </div>
    </header>
  )
}

export default Navbar
