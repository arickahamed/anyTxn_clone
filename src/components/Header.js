import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const [openSolutionHover, setOpenSolutionHover] = useState(false);
  const [updateLang, setUpdateLang] = useState("EN");

  console.log(openLang, "click the lang");
  console.log(updateLang);

  const handleNavburger = () => {
    setOpen(!open);
  }

  const handleHover = () => {
    setOpenHover(!openHover);
  }

  const handleLang = () => {
    setOpenLang(!openLang);
  }

  const handleUpdateLang = (lang) => {
    if (lang === "bengali") {
      setUpdateLang("BN");
      setOpenLang(false);
    } else if (lang === "chinese") {
      setUpdateLang("TW");
      setOpenLang(false);
    } else if (lang === "thai") {
      setUpdateLang("TH");
      setOpenLang(false);
    } else {
      setUpdateLang("EN");
      setOpenLang(false);
    }
  }

  const handleSolutionHover = () => {
    setOpenSolutionHover(!openSolutionHover);
  }

  return (
    <div>
      <header className='w-[100%] h-[70px] bg-[#1a90ef] flex justify-center items-center'>
        <div className='w-[80%] md:w-[90%] m-auto h-[100%] text-white flex justify-between items-center'>
          <h4 className='text-3xl font-bold'>AnyTech</h4>
          <div className='hidden md:flex md:h-[100%] lg:h-[100%] lg:flex justify-between md:justify-evenly items-center md:w-[85%] lg:w-[65%]'>
            <div className='flex h-[100%] justify-between items-center w-[65%] font-semibold text-xl'>
              <div className='relative' >
                <div onMouseEnter={handleSolutionHover} onMouseLeave={handleSolutionHover} className='py-3 px-2 transition delay-200 ease-in-out cursor-pointer flex justify-center items-center'>
                  <h3 >Solutions</h3>
                  <MdKeyboardArrowDown />
                </div>
                <div onMouseEnter={() => setOpenSolutionHover(true)} onMouseLeave={handleSolutionHover} className={`absolute text-[18px] md:w-[250px] border border-blue-500 bg-white text-slate-500 rounded-md p-2 ${openSolutionHover ? "block" : "hidden"}`}>
                  <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyCaSS</a></p>
                  <hr />
                  <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyBaSS</a></p>
                  <hr />
                  <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyPaSS</a></p>
                </div>
              </div>
              <h3 className='py-3 px-2 hover:border-b hover:border-b-white transition delay-200 ease-in-out cursor-pointer'>Service</h3>
              <h3 className='py-3 px-2 hover:border-b hover:border-b-white transition delay-200 hover:ease-in-out cursor-pointer'>About us</h3>
              <div onClick={handleLang} className='relative'>
                <div className='py-1 px-2 cursor-pointer flex justify-between border rounded-2xl items-center'>
                  <IoIosGlobe />
                  <h3 >{updateLang}</h3>
                  {openLang ? < MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>

                <AnimatePresence>
                  {openLang ? <motion.div initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}>
                    <div className={`absolute border rounded-md bg-white border-blue-600 mt-3 w-[250px] text-slate-500 px-3 py-2 text-[18px] ${openLang ? "block ease-in" : "hidden ease-out"} transition-all duration-200 delay-150`}>
                      <h3 onClick={() => handleUpdateLang("english")} className='py-2 cursor-pointer hover:text-blue-500'>EN(English)</h3>
                      <hr />
                      <h3 onClick={() => handleUpdateLang("bengali")} className='py-2 cursor-pointer hover:text-blue-500'>BN(Bengali)</h3>
                      <hr />
                      <h3 onClick={() => handleUpdateLang("thai")} className='py-2 cursor-pointer hover:text-blue-500'>TH(Thai)</h3>
                      <hr />
                      <h3 onClick={() => handleUpdateLang("chinese")} className='cursor-pointer hover:text-blue-500' >TW(Traditional Chinese)</h3>
                    </div>
                    </motion.div> : null}
                </AnimatePresence>

                {/* <div className={`absolute border rounded-md bg-white border-blue-600 mt-3 w-[250px] text-slate-500 px-3 py-2 text-[18px] ${openLang ? "block ease-in" : "hidden ease-out"} transition-all duration-200 delay-150`}>
                  <h3 onClick={() => handleUpdateLang("english")} className='py-2 cursor-pointer hover:text-blue-500'>EN(English)</h3>
                  <hr />
                  <h3 onClick={() => handleUpdateLang("bengali")} className='py-2 cursor-pointer hover:text-blue-500'>BN(Bengali)</h3>
                  <hr />
                  <h3 onClick={() => handleUpdateLang("thai")} className='py-2 cursor-pointer hover:text-blue-500'>TH(Thai)</h3>
                  <hr />
                  <h3 onClick={() => handleUpdateLang("chinese")} className='cursor-pointer hover:text-blue-500' >TW(Traditional Chinese)</h3>
                </div> */}
              </div>
            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='border flex justify-center items-center border-white rounded py-2 px-4 text-xl hover:bg-white hover:text-[#1a90ef] hover:shadow-lg transition delay-150 ease-in-out md:w-[30%] lg:w-[25%]'>
              <button className='flex justify-center items-center'>
                <div className={`font-semibold`}>
                  Contact us
                </div>
                <div className={`transition-all ${openHover ? "pl-3 ease-in-out" : "pl-1 ease-in-out"}`}>
                  <MdKeyboardArrowRight />
                </div>
              </button>
            </div>
          </div>
          <div className='text-2xl md:hidden lg:hidden'>
            {open ? (<div onClick={handleNavburger} className='text-xl font-bold' >
              <RxCross2 />
            </div>) : (<div onClick={handleNavburger} >
              <GiHamburgerMenu />
            </div>)}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;