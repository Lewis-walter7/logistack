'use client';

import React from 'react'
import Modal from './Modal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal';

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const handleChange = () => {
    loginModal.onClose()
    registerModal.onOpen()
  }

  const body = (
    <div className=" mx-auto">
      <form className="flex flex-col gap-4">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="border border-rose-500 w-full p-2 rounded focus:border-rose-800 outline-none"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border border-rose-500 w-full p-2 rounded focus:border-rose-800 outline-none"
        />
        <button
          type="submit"
          className="bg-rose-600 text-white p-2 rounded hover:bg-blue-500"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm space-x-3 text-center">
        Don't have an account?{"  "}
        <button
          className="text-blue-600 underline cursor-pointer"
          onClick={handleChange}
        >
          Sign Up
        </button>
      </p>
    </div>
  )
  return (
    <Modal
      onClose={loginModal.onClose}
      title='Login'
      body={body}
      isOpen={loginModal.isOpen}
    />
  )
}

export default LoginModal