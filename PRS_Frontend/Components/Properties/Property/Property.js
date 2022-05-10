import { useState } from 'react'

const Property = ({ date, img, area, title, price, location, web3 }) => {
  const [status, setStatus] = useState(0)
  let btnColor = status == 0 ? 'bg-[#3555FF]' : 'bg-[#198754]'
  const [contract, setContract] = useState(null)
  const contractAddress = '0x2EDA45bcc6c8C6df92F90264208b60Af3586422e'
  const abi = [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address',
        },
      ],
      stateMutability: 'payable',
      type: 'constructor',
      payable: true,
    },
    {
      inputs: [],
      name: 'InvalidState',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyBuyer',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlySeller',
      type: 'error',
    },
    {
      inputs: [],
      name: 'buyer',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [],
      name: 'propertyContract',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [],
      name: 'propertyId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [],
      name: 'seller',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [],
      name: 'state',
      outputs: [
        {
          internalType: 'enum PurchaseAgreement.State',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [],
      name: 'value',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_propertyId',
          type: 'uint256',
        },
      ],
      name: 'setProperty',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'confirmPurchase',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
    },
    {
      inputs: [],
      name: 'confirmRelease',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paySeller',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
    },
  ]

  const clickHandler = async (e) => {
    e.preventDefault()
    let c = new web3.eth.Contract(abi, contractAddress)
    setContract(c)

    setStatus(1)
  }

  return (
    <div className="relative z-50 my-10 mx-5 w-[361px] rounded-lg border bg-white p-[20px] text-center shadow-lg">
      <img src={img} alt="blog image" className="mx-auto h-[180px] w-[321px]" />
      <p className="my-2 text-left font-inter text-[16px] text-[#B2B1BD]">
        {date}
      </p>

      <h4 className="leading-20 my-2 text-left font-inter text-[20px] font-bold tracking-wide">
        {title}
      </h4>

      <div className="my-1 flex items-center">
        <p className="font-bold">Area : </p>
        <p className="mx-3 text-left font-inter text-[16px] text-[#353535]">
          {area} meter square
        </p>
      </div>
      <div className="my-1 flex items-center">
        <p className="font-bold">Location : </p>
        <p className="mx-3 text-left font-inter text-[16px] text-[#353535]">
          {location}
        </p>
      </div>
      <div className="my-1 flex items-center">
        <p className="font-bold">Price : </p>
        <p className="mx-3 text-left font-inter text-[16px] text-[#353535]">
          ₹ {price}
        </p>
      </div>

      <button
        className={`lightGray mt-4 flex h-[42px] w-full items-center justify-center rounded-full ${btnColor} p-2`}
        onClick={clickHandler}
      >
        {status == 0 && (
          <p className="font-inter text-base font-light text-white">
            {' '}
            Buy Property{' '}
          </p>
        )}
        {status == 1 && (
          <p className="font-inter text-base font-light text-white">
            {' '}
            Buy Request Sent{' '}
          </p>
        )}
      </button>
    </div>
  )
}

export default Property
