import React from 'react'

const Wrapper = (props) => {
  return (
    <div className="md:w3/4 mx-auto w-5/6 max-w-screen-2xl">
      {props.children}
    </div>
  )
}

export default Wrapper
