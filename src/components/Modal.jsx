import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'

const Modal = forwardRef(({children, buttonCaption}, ref) => {
    const modal = useRef()
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                modal.current.showModal()
            }
        }
    })
  return createPortal(
    <dialog ref={modal} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      {children}
      <form method='dialog' className='text-right mt-4'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog> 
  , document.getElementById('modal-root'))
})

export default Modal
