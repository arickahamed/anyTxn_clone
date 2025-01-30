import './App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



function App() {
  return (

    <div className='w-full flex flex-col min-h-screen'>
      {/* Header starts here */}
      <header className='w-[100%] h-[70px] bg-[#1a90ef] flex justify-center items-center'>
        <div className='w-[80%] m-auto text-white flex justify-between items-center'>
          <h4 className='text-3xl font-bold'>AnyTech</h4>
          <div className='text-2xl'>
            <GiHamburgerMenu />
          </div>
        </div>
      </header>

      {/* Footer starts here */}
      <footer className='w-full border border-blue-600 mt-auto'>
        <div className='bg-[#002045] w-full'>
          <div className='w-[80%] h-[85px] text-2xl m-auto flex justify-evenly items-center bg-[#002045] text-white'>
            <h3 className='w-[40%] text-3xl font-bold'>AnyTech</h3>
            <div className='flex w-[55%] justify-evenly items-center md:hidden lg:hidden'>
              <FaLinkedin />
              <FaPhoneAlt />
              <IoMdMail />
            </div>
            <div className='md:flex lg:flex w-[55%] md:text-[#196ac8] lg:text-[#196ac8] justify-evenly items-center hidden'>
              <h3 className='font-bold border-r border-white pr-4 text-md'><a href='https://anytxn.com/en' className='hover:text-gray-400'>Our Services</a></h3>
              <h3><a href='https://anytxn.com/en' className='hover:text-gray-400'>Any SaSS</a></h3>
              <h3><a href='https://anytxn.com/en' className='hover:text-gray-400'>Any BaSS</a></h3>
              <h3><a href='https://anytxn.com/en' className='hover:text-gray-400'>Any PaSS</a></h3>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#00152d] text-[#196ac8] border-t-[1px] border-white'>
          <div className='w-[90%] h-[80px] m-auto pt-3 text-center md:flex lg:flex justify-between items-center'>
            <a href='https://anytxn.com/en' className='hover:text-gray-300'>©2023 All rights reserved. Any Technology Pte Ltd.</a>
            <a href='https://anytxn.com/en' className='hover:text-gray-300'>Privacy Policy.</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
