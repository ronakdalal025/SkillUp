import { GraduationCap, Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);

  const navItems = [
    {name:"Courses", href:"#courses"},
    {name:"Features",href:"#features"},
    {name:"Testimonials",href:"#testimonials"},
    {name:"Contact",href:"#footer"}
  ];

  return (
    <header className='sticky top-0 z-5 bg-white shadow-md'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4'>
        <div className='flex items-center space-x-2'>
          {/* logo icon */}
          <GraduationCap className='w-8 h-8 text-indigo-600' />
          <span className='text-2xl font-extrabold text-gray-900'>ScoreUp</span>
          <span className='text-sm font-medium text-indigo-600'>IELTS</span>
        </div>

        <nav className='hidden lg:flex space-x-8 items-center '>
          {navItems.map(item =>(
            <a href={item.href} key={item.name} className='text-gray-600 hover:text-indigo-600 font-mdeium transition duration-150'>{item.name}</a>
          ))}
          <button className='px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300'>Book Demo</button>
        </nav>
        
        {/* HamBurger Menu logic*/}
        <button className='lg:hidden p-2 text-gray-600 hover:text-indigo-600' onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6"/> : <Menu className='w-6 h-6'/>}
        </button>
      </div>

      {isOpen && (
        <div className='lg-hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 transition-all duration-300 ease-in-out '>
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-8 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition duration-150"
            >
              {item.name}
            </a>
          ))}
            <div className="px-8 pt-4">
              <button className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
                Book Demo
              </button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Navbar
