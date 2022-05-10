import React from 'react'

const Button = ({ text, ...rest }) => {
  return (
    <button
      className=" ml-2 flex h-9 w-24 items-center justify-center rounded-full p-2 font-inter text-lg capitalize text-white duration-200 ease-in hover:bg-white hover:text-black"
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
