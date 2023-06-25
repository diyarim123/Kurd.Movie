import React from 'react';
import { Outlet } from 'react-router-dom';

//import the components
import Navbars from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <div>
    
      <header>
        <Navbars />
      </header>
      

      <main className='bg-slate-950'>
        <Outlet />
      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  )
}
