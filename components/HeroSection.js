import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri'
const HeroSection = () => {
    return (
        <>
            <section id='home'>
                <div className='py-44 grid md:grid-cols-2 gap-5 grid-cols-1 bg-white  dark:bg-stone-950 px- md:px-36 self-center'>
                    <div className='w-32 h-32 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto'>
                        <Image loading='lazy' src={'/ripa.jpg'} alt='profile' width={200} height={200} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className='w-10/12 self-center text-center md:text-left ml-4' >
                        <h1 className=' text-4xl md:text-7xl font-bold dark:text-neutral-100'>Hi, I&#39;m Ripa!</h1>
                        <p className='text-lg mt-4 mb-6 md:text-2xl dark:text-neutral-100'>Electronics Engineer.Interested in web development</p>
                    </div>
                </div >
                <div className='flex justify-center bg-white dark:bg-stone-950'>
                    <a href='#about' >
                        <RiArrowDropDownLine size={50} className='dark:text-neutral-100' />
                    </a>

                </div>

            </section>

        </>

    )
}

export default HeroSection
