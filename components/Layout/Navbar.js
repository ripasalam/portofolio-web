import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { useTheme } from 'next-themes'


const NAV_ITEMS = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "project",
    },
]


const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <div className='bg-white dark:bg-stone-950 w-full top-0 z-50 fixed grid grid-cols-2 py-5 mx-auto dark:border-b dark:dark-stone-600 px-4 sm:px-20 shadow-md'>
            <div className=' self-center'>
                <div className=' dark:text-neutral-100 text-neutral-900 font-bold text-3xl'>
                    Ripa Miptah
                </div>
            </div>
            <div className='md:hidden justify-self-end'>
                <button
                    className='p-3 border border-gray-300 rounded-lg text-neutral-900 dark:bg-neutral-100'
                    onClick={() => { setNavbar(!navbar) }}
                >
                    {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={25} />}
                </button>
            </div>
            <div className={`mt-10 md:block md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
                <div className=' justify-end space-y-8 md:flex md:space-x-6 md:space-y-0'>
                    {NAV_ITEMS.map((item, idx) => (
                        <a
                            href={`#${item.page}`}
                            key={idx}
                            className=" text-lg self-center block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                        >
                            {item.label}
                        </a>
                    ))}
                    {currentTheme === 'dark' ? <button onClick={() => { setTheme('light') }} className='p-2 rounded-lg bg-slate-200' ><RiSunFill size={20} /></button> : <button onClick={() => { setTheme('dark') }} className='p-2 rounded-lg  bg-slate-200'><RiMoonFill size={20} /></button>

                    }
                </div>


            </div>

        </div>
    )
}

export default Navbar
