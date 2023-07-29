import React, { useEffect, useState } from 'react'
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
    const [navbarScroll, setNavbarScroll] = useState('false')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setNavbarScroll(window.scrollY > 20)
        })
    }, []);



    console.log(navbarScroll)
    return (
        <div className={'w-full bg-white dark:bg-stone-950  top-0 z-50 fixed  dark:border-b dark:dark-stone-600  ' + (navbarScroll ? 'shadow-lg' : 'pt-4')}>
            <div className='max-w-screen-xl py-4 sm:py-6 px-8 lg:px-16 grid mx-auto grid-cols-2'>
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
                                className=" text-lg self-center block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 animation-hover relative"
                            >
                                {item.label}
                            </a>
                        ))}
                        {currentTheme === 'dark' ? <button onClick={() => { setTheme('light') }} className='p-2 rounded-lg bg-slate-200' ><RiSunFill size={20} /></button> : <button onClick={() => { setTheme('dark') }} className='p-2 rounded-lg  bg-slate-200'><RiMoonFill size={20} /></button>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
