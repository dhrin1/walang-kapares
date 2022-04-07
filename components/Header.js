
import Image from 'next/image'
import Link from 'next/link'
import { CgShoppingCart } from 'react-icons/cg'

export default function Header() {
  return (
    <div className="w-full h-[10vh] border-b-gray dark:border-b-gray-800  px-5 sm:px-8  bg-white dark:bg-gray-900 fixed top-0 z-10">
        <div className="w-full h-full flex justify-between items-center">
            <div className="block w-14 h-14 cursor-pointer">
                <Link href="/">
                    <Image src={'/asset/logo-walang-kapares.png'} width={50} height={50} alt="Logo" />
                </Link>
            </div>
            <div className="flex justify-end items-center space-x-8">
                <Link href="/signin"><button className="text-base font-medium text-orange-500 hover:text-orange-600 ">Sign In</button></Link>
                <Link href="/cart"><CgShoppingCart size={25} className="cursor-pointer text-orange-500 hover:text-orange-600 " /></Link>
            </div>
        </div>
    </div>  
  )
}
