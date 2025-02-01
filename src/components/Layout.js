import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div>
        <Header />
        </div>
        <div>
            {children}
        </div>
        <div className='mt-auto'>
        <Footer />
        </div>
    </div>
  )
}

export default Layout;