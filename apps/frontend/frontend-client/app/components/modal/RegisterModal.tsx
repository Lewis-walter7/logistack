'use client';

import useRegisterModal from '@/app/hooks/useRegisterModal'
import React from 'react'
import Modal from './Modal'
import useLoginModal from '@/app/hooks/useLoginModal';

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const handleChange = () => {
    loginModal.onOpen()
    registerModal.onClose()
  }

  const body = (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col gap-4">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="border border-rose-500 p-2 rounded"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="border border-rose-500 p-2 rounded"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border border-rose-500 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-rose-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm space-x-3 text-center">
        Already have an account?{"  "}
        <button
          className="text-blue-600 underline cursor-pointer"
          onClick={handleChange}
        >
          Sign In
        </button>
      </p>
    </div>
  )
  return (
    <Modal 
      onClose={registerModal.onClose}
      title='Register'
      body={body}
      isOpen={registerModal.isOpen}
    />
  )
}

export default RegisterModal