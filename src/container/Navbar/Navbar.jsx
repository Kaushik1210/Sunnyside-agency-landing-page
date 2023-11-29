import React, { useRef } from 'react'
import './navbar.css'
import images from '../../images'



const Navbar = () => {

  const[openMenu,setOpenMenu]=React.useState(false);

  const menuRef=useRef();
  const imgRef=useRef();

  window.addEventListener('click',(e)=>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpenMenu(false);
    }
  });

  return (
    <div>
      <div className="navbar">
      <div className="logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="header_menu">
        <a className='menu' href="#about">About</a>
        <a className='menu' href="#services">Services</a>
        <a className='menu' href="#project">Project</a>
        <button className='contact_button'><a className='contact_button_link' href='#contact'>Contact</a></button>
      </div>


        <div className='hamburger'>
         <img src={images.iconhamburger} alt="hamburger" ref={imgRef} onClick={()=> setOpenMenu(!openMenu)} />
        </div>
        

      </div>
      {
        openMenu && 
        <div className='dropdownmenu' onClick={()=>setOpenMenu(false)} ref={menuRef}>
        <a className='menu' href="#about">About</a>
          <a className='menu' href="#services">Services</a>
          <a className='menu' href="#project">Project</a>
          <button href='#contact' ><a  href='#contact'>Contact</a></button>
      </div>
      }
    </div>
  )
}

export default Navbar
