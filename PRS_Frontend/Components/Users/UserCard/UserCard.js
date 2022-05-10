/* eslint-disable @next/next/no-img-element */
import React from 'react'

const UserCard = (props) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center md:w-5/6  md:flex-row">
      <img
        src={props.img}
        className="mb-4 h-[18rem] w-[18rem] rounded-lg md:mb-0 md:mr-4"
      />
      <div className="rounded-lg  bg-white p-6 shadow-lg">
        <div className="flex  items-center border-b-2">
          <p className="my-4  font-inter text-base leading-7 md:w-11/12">
            {props.review}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <h3 className="my-2 font-inter text-base font-semibold ">
              {props.user}
            </h3>
            <p className="font-inter text-xs text-gray-400">{props.company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
// const UserCard = (props) => {
//   return (
//     <div className="mx-auto  md:w-4/6">
//       <div className="relative ">
//         <img
//           src={props.img}
//           alt="user"
//           className="rounded-fully relative top-8 left-4 h-[84px] w-[84px]"
//         />
//         <div className="rounded-lg  bg-white p-6 shadow-lg">
//           <div className="flex min-h-[11rem] items-center border-b-2">
//             <p className="my-4  pb-4 font-inter text-base leading-7 md:w-5/6">
//               {props.review}
//             </p>
//           </div>
//           <div className="my-6 flex items-center justify-between">
//             <div>
//               <h3 className="mb-2 font-inter text-base font-semibold ">
//                 {props.user}
//               </h3>
//               <p className="font-inter text-xs text-gray-400">
//                 {props.company}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default UserCard
