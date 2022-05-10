/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const TryNowBanner = () => {
  return (
    <div className="-banner-gradient md:ms-auto relative z-30 my-10 flex flex-col justify-center overflow-hidden rounded-lg py-5 px-2 md:my-40 md:flex-row md:py-16">
      <div className="md:px-30 mx:auto  md:px-30 flex flex-col items-center justify-center p-2 md:items-start md:py-4">
        <div className="mx-auto w-3/4  md:px-12">
          <h4 className=" mx:auto my-4 text-center font-inter text-4xl font-[600] text-white md:text-5xl">
            Want to accelerate your sales with emotional intelligence?
          </h4>
        </div>
        <div className="mt-4 mb-2 flex w-full justify-center">
          <Link href="https://app.sybill.ai/">
            <a target="_blank">
              <button className="mx-2 flex h-[48px] w-[230px] items-center justify-center rounded-full bg-white py-2 text-lg md:w-48  ">
                <p className="font-inter text-xl font-[450] text-[#3625FB]">
                  Sign up
                </p>
                <img src="/Assets/arrow.svg" alt="arrow" />
              </button>
            </a>
          </Link>
          <Link href="/contact">
            <button className="text-normal mx-2 flex h-[48px] w-[230px] items-center justify-center rounded-full border py-2 font-inter text-base text-white duration-200 ease-in hover:bg-white hover:text-black md:w-48  ">
              Get Demo
            </button>
          </Link>
        </div>
      </div>

      <img
        src="/Assets/capsule.svg"
        alt="capsule"
        className="absolute bottom-0 left-10 -z-10"
      />
      <img
        src="/Assets/capsule.svg"
        alt="capsule"
        className="absolute -top-20 -left-60 -z-10"
      />
      <img
        src="/Assets/capsuleBig.svg"
        alt="capsule"
        className="absolute -bottom-10 -right-80 -z-10"
      />
      <img
        src="/Assets/capsuleBig.svg"
        alt="capsule"
        className="absolute -top-20 -right-96 -z-10"
      />
    </div>
  )
}

export default TryNowBanner
