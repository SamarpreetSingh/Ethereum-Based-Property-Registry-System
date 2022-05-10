import Link from 'next/link'

const DropItem = ({ url, img, title, body }) => {
  return (
    <Link href={url}>
      <div className="my-1 flex w-[284px] cursor-pointer items-start justify-between rounded-lg p-2 hover:bg-[#F5F5F5]">
        <img src={img} alt="icon" className="mt-2" />
        <div className="ml-4 w-full">
          <h3 className="font-inter text-[16px] text-black">{title}</h3>
          <p className="w-full font-inter text-[12px] leading-4 text-black">
            {body}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default DropItem
