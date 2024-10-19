import React from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from "lucide-react"
import { useState } from 'react'
function Navbar() {
  const [mobilwDrawOpen, setmobilwDrawOpen] = useState(false)
  function togglrNavBar() {
    setmobilwDrawOpen(!mobilwDrawOpen)
  }
  return (
    <nav className="sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <a className="text-xl tracking-tight" href="index.jsx">VirtualR</a>
          </div>

          <ul className="hidden lg:flex space-x-12 ml-4">
            <li ><a href="/">Feature</a></li>
            <li ><a href="/">Workflow</a></li>
            <li ><a href="/">Pricing</a></li>
            <li ><a href="/">Testimonials</a></li>
          </ul>
          <div className="hidden lg:flex juctify-center space-x-12 items-center">
            <a href="/" className=" border border-white rounded p-2"> Sign in</a>
            <a href="/" className=" border border-orange-500 bg-gradient-to-r from-orange-400 to-orange-800 rounded-md p-2">Create an account</a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={() => togglrNavBar()}>{mobilwDrawOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobilwDrawOpen && (
          <div className="flexed right-0 z-20 bg-neutral-900 w-full p-12 flex justify-center items-center flex-col lg:hidden">
            <ul className="flex flex-col">
              <li className="py-4"><a href="/">Feature</a></li>
              <li className="py-4" ><a href="/">Workflow</a></li>
              <li className="py-4" ><a href="/">Pricing</a></li>
              <li className="py-4" ><a href="/">Testimonials</a></li>
            </ul>
            <div className="lg:hidden flex juctify-center space-x-12 items-center">
            <a href="/" className=" border border-white rounded p-2"> Sign in</a>
            <a href="/" className=" border border-orange-500 bg-gradient-to-r from-orange-400 to-orange-800 rounded-md p-2">Create an account</a>
          </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
