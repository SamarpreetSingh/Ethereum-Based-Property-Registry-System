import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import Web3 from 'web3'

const Sell = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState(0)
  const [area, setArea] = useState(0)
  const [contract, setContract] = useState(null)
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)

  const router = useRouter()

  let abi = [
    {
      inputs: [],
      name: 'count',
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
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
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
          name: '',
          type: 'uint256',
        },
      ],
      name: 'names',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
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
          name: '',
          type: 'uint256',
        },
      ],
      name: 'property',
      outputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_area',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_price',
          type: 'uint256',
        },
        {
          internalType: 'int256',
          name: '_pin',
          type: 'int256',
        },
        {
          internalType: 'string',
          name: '_district',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_state',
          type: 'string',
        },
        {
          internalType: 'bool',
          name: '_isVerified',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
      ],
      name: 'setName',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'area',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          internalType: 'int256',
          name: 'pin',
          type: 'int256',
        },
        {
          internalType: 'string',
          name: 'district',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_state',
          type: 'string',
        },
      ],
      name: 'addProperty',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'propertyId',
          type: 'uint256',
        },
      ],
      name: 'verifyProperty',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'propertyId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ]
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

  let contractAddress = '0xD89304cb82AC157CF960843bA4c322a6D3F28043'

  const uploadHandler = async (event) => {
    event.preventDefault()

    const property = {
      title,
      location,
      price,
      area,
      date: new Date().toISOString().substring(0, 10),
    }

    try {
      const response = await fetch(
        'https://property-registry-system-default-rtdb.firebaseio.com/property.json',
        {
          body: JSON.stringify(property),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers':
              'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true',
          },
          method: 'POST',
        }
      )
    } catch (err) {
      console.log('Error Encountered', err)
    }

    let c = new web3.eth.Contract(abi, contractAddress)
    setContract(c)

    try {
      let res = await c.methods.setName('samar').call()
      const name = await c.methods.name().call()
      console.log(name)
    } catch (err) {
      console.log(err)
    }

    console.log('uploaded', property)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <h1 className="pt-20 text-center text-[44px] font-semibold">
        Add Property For Sale
      </h1>
      <form className="mx-auto mt-16 w-full max-w-lg rounded-lg border-2 bg-white  py-8  pr-6">
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-full-name"
            >
              Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="inline-full-name"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-full-name"
            >
              Area
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="inline-full-name"
              type="number"
              min="0"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-full-name"
            >
              Location
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="inline-full-name"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-full-name"
            >
              Price
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="inline-full-name"
              type="number"
              min="0"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Link href="/">
              <button
                className="focus:shadow-outline mx-2 w-[6rem] rounded bg-[#df4759] py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
                type="button"
              >
                Back
              </button>
            </Link>
            <button
              className="focus:shadow-outline mx-2 w-[6rem] rounded bg-[#198754] py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
              type="button"
              onClick={uploadHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Sell
