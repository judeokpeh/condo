
import React from 'react'
interface InputProps {
  type: string,
  value: string,
  onChange:any,
  label: string,
  id: string,
}
const Input: React.FC<InputProps> = ({id, type, onChange, label, value}) => {
  return (
    <div className='relative'>
      <input 
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className='
      block
      bg-neutral-700 
      px-6 
      w-full
      text-md
      text-white
      peer
      pb-1
      focus:ring-0
      appearance-none 
      rounded-md 
      pt-6 
      focus:outline-none
      transition
      '
      placeholder=' '/>
      <label htmlFor={id}
      className='
            absolute 
            text-md
            text-zinc-400
            duration-150 
            transform
            -translate-y-3
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
      '
      >{label}</label>
    </div>
  )
}

export default Input
