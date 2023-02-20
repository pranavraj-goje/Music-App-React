import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
  const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* Logo */}
      <img src={require("../img/MuzicLogo.png")} alt="" className='logo w-[42px] h-[42px]'/>
      {/* Side Menu */}
      <CenterMenu />
      {/* Buttons */}
      <div className="buttons flex">
        <button className={"mr-[35px] hover:bg-[#232A4E] "+buttonStyle}>Sign up</button>
        <button className={"bg-[#232A4E] "+ buttonStyle}>Log in</button>
      </div>
    </div>
  )
}

export default Header