/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

const Hero = ({ subheading, img, isMain, heading, isFor, msg }) => {
  return (
    <div className="container mx-auto flex w-11/12 flex-wrap px-0 pt-5 pb-8 lg:pl-12">
      <div className="w-full lg:w-2/4 lg:py-20 ">
        {isMain === true ? (
          <h3
            className={`leading-15 text-center font-inter text-4xl font-bold text-white lg:pr-12 lg:text-left lg:text-[48px] lg:leading-[4rem]`}
          >
            Ethereum Based <br />{' '}
            <span className={'text-[#FFAC33]'}>Property</span> Registry System
          </h3>
        ) : (
          <h3
            className={`${styles.heading} mb-2 text-center font-inter text-3xl font-[400] leading-[3rem] lg:pr-0 lg:text-left lg:text-[48px] lg:leading-tight`}
          >
            {heading}
          </h3>
        )}
        <p
          className={
            isFor === 'scoring'
              ? 'py-12 text-center font-inter text-xl font-light leading-8 tracking-wide  text-white lg:w-4/5 lg:pt-2 lg:pb-6 lg:text-left'
              : 'py-12 text-center font-inter text-xl font-normal leading-8 tracking-wide  text-white lg:w-4/5 lg:py-10 lg:text-left'
          }
        >
          {subheading}
        </p>
        <div className="align-center flex justify-center space-x-2 lg:justify-start">
          <Link href="/sell">
            <a>
              <button className=" h-15 flex w-48 items-center justify-center rounded-full bg-white px-4 py-3 ">
                <p className="-purple-color text-bold font-inter text-xl">
                  Sell
                </p>
                <img src="/Assets/arrow.svg" alt="arrow" />
              </button>
            </a>
          </Link>
          <Link href="#properties">
            <button className=" h-15 flex w-40 items-center justify-center rounded-full border-2 border-white px-4 py-3  capitalize text-white duration-200 ease-in hover:bg-white hover:text-black">
              <p className="font-inter text-base font-light">Buy</p>
            </button>
          </Link>
        </div>
        {msg && (
          <div className="relative ml-36 mt-8 hidden w-[12rem] lg:block">
            <img
              src="/Assets/carrow.png"
              alt="curve arrow"
              className="absolute -left-8 -top-3"
            />
            <p className="w-[15rem] font-inter text-sm font-[400] text-white">
              {msg}
            </p>
          </div>
        )}
      </div>
      <div className="relative  hidden lg:flex lg:w-2/4">
        <img
          src={img}
          alt="hero"
          className="hero-img h-[32rem] w-[32rem] pl-12"
        />
      </div>
    </div>
  )
}

export default Hero
