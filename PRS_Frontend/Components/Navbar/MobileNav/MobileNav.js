/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../UI/Button/Button'
import Link from 'next/link'

const Mobilenav = ({ onClick }) => {
  return (
    <div className="z-100 absolute top-0 left-0 z-50 flex h-auto  w-full flex-col bg-white py-8 md:hidden">
      <div className="flex justify-end">
        <img
          src="/Assets/cancel.png"
          alt="Cancel"
          onClick={onClick}
          className="mr-5 w-10"
        />
      </div>
      <ul className="flex flex-col items-center justify-center space-y-2 text-black ">
        <Link href="/">
          <a target="_blank">
            <li className="-nav-item cursor-pointer font-cabinet_var">Login</li>
          </a>
        </Link>
        <Link href="/">
          <a target="_blank">
            <li className="-nav-item cursor-pointer font-cabinet_var">
              Sign Up
            </li>
          </a>
        </Link>
      </ul>
    </div>
  )
}

export default Mobilenav
