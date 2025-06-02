'use client';

import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  body?: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  body,
  title
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
      setShowModal(false)
      setTimeout(() => {
        onClose()
      }, 300)
    }, [onClose])

    if(!isOpen) {
      return null     
    } 

    return (
      <>
        <div className='fixed overflow-x-hidden my-auto outline-none overflow-y-auto inset-0 z-50 flex items-center justify-center bg-neutral-800/70 bg-opacity-50 focus:outline-none'>
          <div className='relative w-full md:w-8/12 lg:w-6/12 xl:w-5/12 my-auto mx-auto md:h-auto'>
            <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}>
              <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/* Header */}
                <div className='flex items-center p-6 rounded-lg justify-center relative border-b-[1px]'>
                    <button className='p-1 border-0 hover:opacity-70 transition absolute left-9' onClick={handleClose}>
                      <IoMdClose className='text-black' size={20} onClick={handleClose}/>
                    </button>
                    <div>
                      <h3 className='text-lg font-semibold'>{title}</h3>
                    </div>
                </div>
                {/* Body */}
                <div className='relative p-6 flex-auto'>
                  {body}
                </div>
                {/* Footer */}
                <div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
}

export default Modal