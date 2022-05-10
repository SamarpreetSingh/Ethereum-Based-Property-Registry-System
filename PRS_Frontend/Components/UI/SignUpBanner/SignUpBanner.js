/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Signupbanner = () => {
  return (
    <div className="-banner-gradient relative z-30 my-10 flex flex-col rounded-lg py-10 px-2 lg:my-44 lg:flex-row lg:px-0 lg:py-14 ">
      <div className="flex flex-col items-center justify-center lg:w-2/4 lg:items-start lg:pl-28 ">
        <h4 className=" text-center font-cabinet text-[42px] font-bold text-white ">
          Sybill is for the closers
        </h4>
        <p className="pt-2 pb-8 text-center font-inter leading-7 tracking-wide text-white lg:text-left">
          Account Executives, Sales Managers and Leaders: communicate
          effectively and close more with a deep understanding of what your
          prospects care about.
        </p>
        <Link href="https://app.sybill.ai/">
          <a target="_blank">
            <button className="bg-blue flex h-12 w-36  items-center justify-center rounded-full bg-sky-400  font-inter ">
              <p className="text-normal text-xl text-white">Sign Up</p>
              <img src="/Assets/white-arrow.svg" alt="arrow" />
            </button>
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-center lg:flex lg:w-2/4 lg:justify-end">
        <img
          src="/Assets/signUpBanner.png"
          alt="smiles"
          className="h-auto w-auto lg:absolute lg:-top-20 lg:right-0 lg:bottom-0 lg:-z-10 lg:h-[580px]"
        />
      </div>
      <img
        src="/Assets/capsule.svg"
        alt="capsule"
        className="absolute bottom-0 -z-10"
      />
      <img
        src="/Assets/capsule.svg"
        alt="capsule"
        className="absolute -top-20 -left-60 -z-10"
      />
    </div>
  )
}

export default Signupbanner
