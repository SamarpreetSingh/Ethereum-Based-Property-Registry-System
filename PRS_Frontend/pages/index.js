/* eslint-disable @next/next/no-img-element */

import { Fragment, useState, useEffect } from 'react'
let Web3 = require('web3')

import Navbar from '../Components/Navbar/Navbar'
import HeroWrapper from '../Components/UI/HeroWrapper/HeroWrapper'
import Hero from '../Components/Hero/Hero'
import Wrapper from '../Components/UI/Wrapper/Wrapper'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/UI/Banner/Banner'
import Properties from '../Components/Properties/Properties'

export default function Home() {
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)

  useEffect(() => {
    window.ethereum
      ? ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            setAddress(accounts[0])
            let w3 = new Web3(ethereum)
            setWeb3(w3)
          })
          .catch((err) => console.log(err))
      : alert('Please install MetaMask')
  }, [])

  return (
    <Fragment>
      <HeroWrapper>
        <Navbar address={address} />
        <Hero
          subheading="We have elected to put our money and faith in a mathematical framework that is free of politics and human error."
          img="/Assets/hero.webp"
          isMain={true}
          msg={`Register Property For Sale`}
        />
      </HeroWrapper>
      <Wrapper>
        <Properties web3={web3} />
        <Banner />
      </Wrapper>

      <Footer />
    </Fragment>
  )
}
