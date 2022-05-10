/* eslint-disable @next/next/no-img-element */

import React from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={`${classes.footer} mt-30 mx-auto w-full bg-gray-50 py-12`}>
      <div className="md:w3/4 mx-auto w-5/6 max-w-screen-2xl">
        <div
          className={`${classes.main} flex flex-col items-center justify-center  p-6 lg:flex-row lg:items-start `}
        >
          <div className={`${classes.handles} mb-4 md:w-2/6  `}>
            <div className="flex items-center justify-center ">
              <img
                src="/Assets/logo.webp"
                alt="logo"
                className="h-[72px] w-[74px]"
              />
              <h4 className="m-6 ml-2 text-center font-cabinet text-4xl font-semibold tracking-wider text-darkBlue">
                PRS
              </h4>
            </div>
            <div>
              <p className="mb-4 text-center font-inter text-[14px] font-medium leading-6 tracking-wide text-darkBlue lg:text-left">
                Blockchain Solution making property registration easier.
              </p>
            </div>
            <div className={`${classes.icons} mt-8 flex justify-center `}>
              <div className="cursor-pointer rounded-full bg-white p-1 shadow-xl">
                <img
                  src="/Assets/twitter1.svg"
                  alt="twitter"
                  className="h-[38px] w-[38px] scale-[0.5]"
                />
              </div>
              <div className="mx-4 cursor-pointer rounded-full bg-white p-1 shadow-xl">
                <img
                  src="/Assets/linkdin.svg"
                  alt="instagram"
                  className="h-[38px] w-[38px] scale-[0.5]"
                />
              </div>
              <div className="mx-2 cursor-pointer rounded-full bg-white p-1 shadow-xl">
                <img
                  src="/Assets/instagram.jpg"
                  alt="instagram"
                  className="h-[38px] w-[38px] scale-[0.8]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rights}>
          <p className="border-t pt-6 text-center font-inter text-base text-lightDarkBlue">
            All rights reserved @samar 2022
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
