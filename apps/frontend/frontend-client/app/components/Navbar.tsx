'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed top-0 left-0 right-0 items-center bg-white shadow-md z-50'>
        <div className='relative flex items-center justify-between px-4 py-2 h-[64px]'>
            <div>
                <Link href="/" className='text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300'>
                    LogiStack
                </Link>
            </div>

            <div className='flex items-center space-x-4'>
                <ul className='flex space-x-6'>
                    <li>
                        <Link href="/" className='text-gray-600 hover:text-blue-600 transition-colors duration-300'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className='text-gray-600 hover:text-blue-600 transition-colors duration-300'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className='text-gray-600 hover:text-blue-600 transition-colors duration-300'>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <button>
                        <FaUserCircle
                            size={30}
                        />
                    </button>
                </div>
            </div>
            { isOpen &&
                <div className='absolute inset-y-0 right-0 top-[60px] items-center pr-4'>
                    <div className='bg-gray-200 space-y-2 py-2 shadow-lg rounded-sm flex flex-col'>
                        <button className='px-4 cursor-pointer text-black transition-colors duration-300'>
                            Sign In
                        </button>
                        <button className='ml-2 cursor-pointer px-4 transition-colors duration-300'>
                            Sign Up
                        </button>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar