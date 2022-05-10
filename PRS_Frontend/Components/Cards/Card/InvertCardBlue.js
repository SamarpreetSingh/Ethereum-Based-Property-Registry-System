/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const InvertCardBlue = ({ heading, subheading }) => {
  return (
    <div className="relative mx-auto my-32 flex w-5/6 flex-col justify-center bg-lightBlue px-10 py-14 px-4 lg:flex lg:flex-row lg:items-center lg:py-24 ">
      <div className="mx:auto order-last lg:order-first lg:w-3/5">
        <h4 className="-card-heading-color-1 mt-5 w-full text-center font-inter text-[42px] font-[700] leading-tight ">
          {heading}
        </h4>
        <p className="my-9 text-center font-inter text-base font-[450] leading-7 text-black ">
          Sybill is powered by a one-of-a-kind multimodal intelligence engine
          built upon years of{' '}
          <span className="font-bold">
            research in computer vision, natural language processing, and speech
            processing
          </span>{' '}
          Multiple modalities unravel insights about your conversations that
          were not possible before, with high accuracy and deep context.
        </p>
        <div className="align-center flex justify-center space-x-2 ">
          <Link href="https://app.sybill.ai/">
            <a target="_blank">
              <button className="-card-btn-color flex h-12 w-36 items-center justify-center rounded-full p-2">
                <p className="text-semibold font-inter text-xl text-white">
                  Sign Up
                </p>
                <img src="/Assets/white-arrow.svg" alt="arrow" />
              </button>
            </a>
          </Link>
          <Link href="/contact">
            <button className=" border-grey-200 flexh-12 text-grey-200 w-36 items-center  justify-center rounded-full border-2 p-2 capitalize text-slate-500 duration-200 ease-in hover:border-purple-400	">
              <p className="text-grey-200 font-inter text-base">Get Demo</p>
            </button>
          </Link>
        </div>
      </div>
      <img
        src="/Assets/gradr.png"
        alt="gradient"
        className="absolute -right-40 -z-10"
      />
    </div>
  )
}

export default InvertCardBlue
