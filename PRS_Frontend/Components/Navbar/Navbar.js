/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import MobileNav from './MobileNav/MobileNav'
import Link from 'next/link'
import DropItem from './DropItem/DropItem'
export default function Navbar({ address }) {
  const [show, setShow] = useState(false)
  const handleClick = (e) => {
    setShow((prev) => !prev)
  }
  return (
    <header className=" relative z-[100] mx-auto flex w-full max-w-screen-2xl justify-between px-4 py-5 sm:w-5/6 lg:px-2 lg:py-10 	">
      <Link href="/">
        <div className="flex cursor-pointer items-center">
          <img
            src="/Assets/logo.webp"
            alt="logo"
            className="h-[62px] w-[64px]"
          />
          <h4 className="ml-4  font-inter text-2xl font-normal text-white lg:text-4xl ">
            PRS
          </h4>
        </div>
      </Link>

      {address === null && (
        <div className="  hidden lg:flex">
          <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
            <a target="_blank">
              <Button
                text="sign up"
                className="ml-2 flex h-9 w-24 items-center justify-center rounded-full bg-white p-2 font-inter text-base capitalize "
              />
            </a>
          </Link>
        </div>
      )}
      {address !== null && (
        <div className="  hidden lg:flex">
          <Link href="/">
            <button className="ml-2 flex h-9 w-max items-center justify-center rounded-full bg-white p-2 font-inter text-base capitalize ">
              {address}
            </button>
          </Link>
        </div>
      )}

      {show === false ? (
        <img
          src="/Assets/toggle.png"
          alt="toggle"
          className="w-8 lg:hidden"
          onClick={handleClick}
        />
      ) : null}
      {show === true ? <MobileNav onClick={handleClick} /> : null}
    </header>
  )
}
