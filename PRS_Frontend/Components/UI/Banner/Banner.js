/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Banner = () => {
  return (
    <div className="-banner-gradient relative z-30 my-10 flex flex-col rounded-lg p-4 lg:my-28 lg:flex-row lg:px-0 lg:py-20">
      <div className="mx-auto flex flex-wrap items-center justify-center lg:w-4/5 lg:items-start   ">
        <h4 className=" mt-10 text-center  font-cabinet_md text-[32px] font-bold leading-10  tracking-wide text-white lg:mt-0 lg:w-4/5">
          A New Approach to Old Problems
        </h4>
        <p className="lg:w-6/6 my-5 text-center font-inter text-[18px] font-normal leading-7 tracking-wide text-white lg:my-0 lg:pt-8 ">
          “There are a lot of really fabulous things that get done with digital
          assets and blockchain technologies to reduce friction, to reduce
          costs, and enable things that weren't possible before.”
        </p>
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
      <img
        src="/Assets/capsule.svg"
        alt="capsule"
        className="absolute bottom-0 -right-10 -z-40"
      />
      <img
        src="/Assets/capsule.svg"
        alt="capsule"
        className="absolute -top-40 right-40 -z-10"
      />
    </div>
  )
}

export default Banner
