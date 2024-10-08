import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[63px] flex justify-between items-center px-5 bg-[#dbaf96] text-gray-300'>
      <div>
        {/*add logo later*/}
        <h1 className=' font-thin text-2xl italic font-serif'style={{color: '#808080', textShadow: '4px 4px 2px #96c2db'}}>TD</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8' style={{ color: '#808080' }}>
        <li>
          <Link to='Home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/*<li>
          <Link to='About' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='Project' smooth={true} duration={500}>
            Project
          </Link>
  </li>*/}
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'  style={{ color: '#808080' }}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#E5EDF1] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl' style={{ color: '#808080' }}>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/*<li className='py-6 text-4xl' style={{ color: '#808080' }}>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl' style={{ color: '#808080' }}>
          {' '}
          <Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Project
          </Link>
      </li>*/}
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E76A8]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/tana-desir'
              target='_blank'
              >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/TAnDe07'
              target='_blank'
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ED2224]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href="https://drive.google.com/file/d/1r2xoqNQmubcjPI02giEGvDxkMitn9RHS/view?usp=sharing"
              target='_blank'
            >
              Resume <GrDocumentPdf size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
