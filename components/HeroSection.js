import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri'
const HeroSection = () => {
    return (
        <>
            <section id='home'>
                <div className='pt-44'>
                    <div className='max-w-screen-xl px-8 lg:px-16 mx-auto '>
                        <div className='w-full lg:w-10/12 flex flex-col justify-center min-h-screen-xl text-center lg:text-left py-32' >
                            <h1 className=' text-4xl md:text-7xl font-bold text-neutral-700 dark:text-neutral-100'>Hi, I&#39;m Ripa!</h1>
                            <p className='text-lg mt-4 mb-6 md:text-2xl text-neutral-500 dark:text-neutral-100'>Electronics Engineer.Interested in web development</p>
                        </div>
                    </div >
                    <div className='flex justify-center mb-10'>
                        <a href='#about' >
                            <RiArrowDropDownLine size={50} className='text-neutral-900 dark:text-neutral-100' />
                        </a>

                    </div>

                </div>


            </section>

        </>

    )
}

export default HeroSection
