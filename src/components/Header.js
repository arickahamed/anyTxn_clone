import React, { useEffect, useRef } from 'react'
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
  const [openMobileLang, setOpenMobileLang] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const [openSolutionHover, setOpenSolutionHover] = useState(false);
  const [updateLang, setUpdateLang] = useState("EN");
  const [updateMobileLang, setUpdateMobileLang] = useState("EN");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenLang(false);
        setOpenMobileLang(false);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavburger = () => {
    setOpen(!open);
  }

  const handleHover = () => {
    setOpenHover(!openHover);
  }

  const handleLang = () => {
    setOpenLang((prev) => !prev); 
  };
  
  console.log("open lang: ", openLang);

  const handleMobileLang = () => {
    setOpenMobileLang(!openMobileLang);
  }
  
  // console.log(openMobileLang, "3..4");

  const handleUpdateLang = (lang) => {
    if (lang === "bengali") {
      setUpdateLang("BN");
      setOpenLang(false);
      console.log(openLang, "bn Clicked")
    } else if (lang === "chinese") {
      setUpdateLang("TW");
      setOpenLang(false);
      console.log(openLang, "tw Clicked")
    } else if (lang === "thai") {
      setUpdateLang("TH");
      setOpenLang(false);
      console.log(openLang, "th Clicked")
    } else {
      setUpdateLang("EN");
      setOpenLang(false);
      console.log(openLang, "en Clicked")
    }
  }

  const handleUpdateMobileLang = (lang) => {
    if (lang === "bengali") {
      setUpdateMobileLang("BN");
      setOpenMobileLang(false);
      setOpen(false);
    } else if (lang === "chinese") {
      setUpdateMobileLang("TW");
      setOpenMobileLang(false);
      setOpen(false);
    } else if (lang === "thai") {
      setUpdateMobileLang("TH");
      setOpenMobileLang(false);
      setOpen(false);
    } else {
      setUpdateMobileLang("EN");
      setOpenMobileLang(false);
      setOpen(false);
    }
  }

  const handleSolutionHover = () => {
    setOpenSolutionHover(!openSolutionHover);
  }

  return (
    <div>
      <header className='w-[100%] h-[90px] bg-[#1a90ef] flex justify-center items-center'>
        <div className='w-[80%] md:w-[90%] m-auto h-[100%] text-white flex justify-between items-center'>
          <h4 className='text-3xl font-bold'>AnyTech</h4>

          {/* desktop navbar */}
          <div className={`hidden md:flex md:h-[100%] lg:h-[100%] lg:flex lg:justify-between md:justify-evenly items-center md:w-[85%] lg:w-[65%]`}>
          {/* <div className={`transform transition-transform duration-150 ease-in-out z-40 ${open ? "flex flex-col absolute top-[5.5rem] left-0 pb-3 bg-blue-500 w-full translate-x-0" : "hidden"} md:flex md:h-[100%] lg:h-[100%] lg:flex lg:justify-between md:justify-evenly items-center md:w-[85%] lg:w-[65%]`}> */}
            <div className={`${open ? "flex-col w-[80%]" : ""} flex h-[100%] justify-between items-center md:w-[65%] font-semibold text-xl`}>
              <div className={`relative`} >
                <div onMouseEnter={handleSolutionHover} onMouseLeave={handleSolutionHover} className={`${open ? "" : ""} py-3 px-2 transition delay-200 ease-in-out cursor-pointer flex justify-center items-center`}>
                  <h3 >Solutions</h3>
                  {openSolutionHover ? <div onClick={handleSolutionHover} className={`${openSolutionHover ? "block" : "hidden"
                    }`}> <MdKeyboardArrowUp /> </div> : <div onClick={handleSolutionHover} className={`${openSolutionHover ? "hidden" : "block"}`}><MdKeyboardArrowDown /></div>}
                </div>
                <div onMouseEnter={() => setOpenSolutionHover(true)} onMouseLeave={handleSolutionHover} className={`${openSolutionHover ? "opacity-100 z-50" : "opacity-0 z-0"} absolute text-[18px] md:w-[250px] border border-blue-500 bg-white text-slate-500 rounded-md mt-1 p-2 ${openSolutionHover ? "block" : "hidden"}`}>
                  <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyCaSS</a></p>
                  <hr />
                  <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyBaSS</a></p>
                  <hr />
                  <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyPaSS</a></p>
                </div>
              </div>
              <h3 className='py-3 px-2 hover:border-b hover:border-b-white transition delay-200 ease-in-out cursor-pointer'>Service</h3>
              <h3 className='py-3 px-2 hover:border-b hover:border-b-white transition delay-200 hover:ease-in-out cursor-pointer'>About us</h3>
              {/* <div ref={menuRef} onClick={()=>handleLang()} className='relative'>
                <div className={`py-1 px-2 cursor-pointer flex justify-between border rounded-2xl items-center`}>
                  <IoIosGlobe />
                  <h3 >{updateLang}</h3>
                  {openLang ? < MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
                <AnimatePresence>
                  {openLang ? <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} >
                    <div className={`absolute border rounded-md bg-white border-blue-600 mt-5 w-[250px] text-slate-500 px-3 py-2 text-[18px] ${openLang ? "block" : "hidden"} transition-all duration-200 delay-150`}>
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
              </div> */}
              <div ref={menuRef} className='relative'>
                <div
                  onClick={handleLang}
                  className='py-1 px-2 cursor-pointer flex justify-between border rounded-2xl items-center'
                >
                  <IoIosGlobe />
                  <h3>{updateLang}</h3>
                  {openLang ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                  {openLang && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='absolute border rounded-md bg-white border-blue-600 mt-5 w-[250px] text-slate-500 px-3 py-2 text-[18px]'
                    >
                      <h3 onClick={() => handleUpdateLang("english")} className='py-2 cursor-pointer hover:text-blue-500'>EN (English)</h3>
                      <hr />
                      <h3 onClick={() => handleUpdateLang("bengali")} className='py-2 cursor-pointer hover:text-blue-500'>BN (Bengali)</h3>
                      <hr />
                      <h3 onClick={() => handleUpdateLang("thai")} className='py-2 cursor-pointer hover:text-blue-500'>TH (Thai)</h3>
                      <hr />
                      <h3 onClick={() => handleUpdateLang("chinese")} className='cursor-pointer hover:text-blue-500'>TW (Traditional Chinese)</h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`${open ? "bg-blue-500 mt-2" : ""} border flex justify-center items-center border-white rounded py-3 px-4 text-xl hover:bg-white hover:text-[#1a90ef] hover:shadow-lg transition delay-150 ease-in-out md:w-[30%] lg:w-[23%]`}>
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

          {/* mobile navbar */}
          <div
            className={`transform transition-transform duration-500 ease-in-out
    ${open ? "flex flex-col absolute top-[5.5rem] left-0 pb-3 bg-blue-500 w-full translate-x-0"
                : "absolute top-[5.5rem] left-0 pb-3 bg-blue-500 w-full -translate-x-full"} md:hidden lg:hidden`}
          >
          <div className={`${open ? "flex-col w-[80%]" : ""} flex h-[100%] justify-between items-center md:w-[65%] font-semibold text-xl`}>
            <div className={`relative`} >
              <div onMouseEnter={handleSolutionHover} onMouseLeave={handleSolutionHover} className={`${open ? "" : ""} py-3 px-2 transition delay-200 ease-in-out cursor-pointer flex justify-center items-center`}>
                <h3 >Solutions</h3>
                {openSolutionHover ? <div onClick={handleSolutionHover} className={`${openSolutionHover ? "block" : "hidden"
                  }`}> <MdKeyboardArrowUp /> </div> : <div onClick={handleSolutionHover} className={`${openSolutionHover ? "hidden" : "block"}`}><MdKeyboardArrowDown /></div>}
              </div>
              <div onMouseEnter={() => setOpenSolutionHover(true)} onMouseLeave={handleSolutionHover} className={`${openSolutionHover ? "opacity-100 z-50" : "opacity-0 z-0"} absolute text-[18px] md:w-[250px] border border-blue-500 bg-white text-slate-500 rounded-md mt-1 p-2 ${openSolutionHover ? "block" : "hidden"}`}>
                <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyCaSS</a></p>
                <hr />
                <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyBaSS</a></p>
                <hr />
                <p className='py-2'><a className='hover:text-blue-600 hover:transition-all ease-in-out delay-100' href="/">AnyPaSS</a></p>
              </div>
            </div>
            <h3 className='py-3 px-2 hover:border-b hover:border-b-white transition delay-200 ease-in-out cursor-pointer'>Service</h3>
            <h3 className='py-3 px-2 hover:border-b hover:border-b-white transition delay-200 hover:ease-in-out cursor-pointer'>About us</h3>
              <div ref={menuRef} onClick={handleMobileLang} className='relative'>
              <div className={`py-1 px-2 cursor-pointer flex justify-between border rounded-2xl items-center`}>
                <IoIosGlobe />
                <h3 >{updateMobileLang}</h3>
                {openMobileLang ? < MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
              <AnimatePresence>
                {openMobileLang ? <motion.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }} >
                  <div className={`${open ? "w-[200px]" : ""} absolute border rounded-md bg-white border-blue-600 mt-5 w-[250px] text-slate-500 px-3 py-2 text-[18px] ${openMobileLang ? "block " : "hidden "} transition-all duration-200 delay-150`}>
                    <h3 onClick={() => handleUpdateMobileLang("english")} className='py-2 cursor-pointer hover:text-blue-500 '>EN(English)</h3>
                    <hr />
                    <h3 onClick={() => handleUpdateMobileLang("bengali")} className='py-2 cursor-pointer hover:text-blue-500'>BN(Bengali)</h3>
                    <hr />
                    <h3 onClick={() => handleUpdateMobileLang("thai")} className='py-2 cursor-pointer hover:text-blue-500'>TH(Thai)</h3>
                    <hr />
                    <h3 onClick={() => handleUpdateMobileLang("chinese")} className='cursor-pointer hover:text-blue-500' >TW(Traditional Chinese)</h3>
                  </div>
                </motion.div> : null}
              </AnimatePresence>
            </div>
          </div>
          <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`${open ? "bg-blue-500 mt-3 w-[55%] flex justify-center items-center mx-auto" : ""} border flex justify-center items-center border-white rounded py-3 px-4 text-xl hover:bg-white hover:text-[#1a90ef] hover:shadow-lg transition delay-150 ease-in-out md:w-[30%] lg:w-[23%]`}>
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