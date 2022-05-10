/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const InvertCard = ({ heading, subheading, img }) => {
  return (
    <div className="py-14 lg:flex lg:items-center lg:py-6 ">
      <div className="flex items-center justify-center md:mb-8 lg:w-2/4">
        <img src={img} alt="card-image" className="card-image" />
      </div>
      <div className="lg:w-2/4 lg:pr-24 lg:pl-12">
        <h4 className="-card-heading-color-1 mt-5 w-full text-center  font-inter text-[32px] font-[700]  leading-tight  lg:text-left ">
          {heading}
        </h4>
        <p className="my-9 text-center font-inter text-lg leading-7 text-darkBlue lg:pr-10 lg:text-left">
          {subheading}
        </p>
        <div className="align-center flex justify-center space-x-2 lg:justify-start">
          <Link href="https://app.sybill.ai/">
            <a target="_blank">
              <button className="-card-btn-color flex h-12 w-36 items-center justify-center rounded-full p-2">
                <p className="text-normal font-inter text-xl text-white">
                  Sign Up
                </p>
                <img src="/Assets/white-arrow.svg" alt="arrow" />
              </button>
            </a>
          </Link>
          <Link href="/contact">
            <button className=" border-grey-200 flex h-12 w-36 items-center justify-center  rounded-full border-2 p-2 capitalize duration-200 ease-in hover:border-purple-400 ">
              <p className="text-grey-200 font-inter text-base">Get Demo</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InvertCard
