/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './HeroWrapper.module.css'
const Herowrapper = (props) => {
  return (
    <div className={`${styles.container} w-4/4 relative`}>
      {props.children}
      {props.isFor === 'career' ? (
        <div className="-wave-height-2 -wave-bg absolute z-10"></div>
      ) : (
        <div className="w-100 -wave-height -wave-bg relative z-20"></div>
      )}
    </div>
  )
}

export default Herowrapper
