import Image from 'next/image'
import React from 'react'

const animations = [
    `fade-up`,
    `fade-down`,
    `fade-left`,
    `fade-right`,
    `fade-up-right`,
    `fade-up-left`,
    `fade-down-right`,
    `fade-down-left`,
    `zoom-in`,
    `zoom-in-up`,
    `zoom-in-down`,
    `zoom-in-left`,
    `zoom-in-right`,
    `zoom-out`,
    `zoom-out-up`,
    `zoom-out-down`,
    `zoom-out-left`,
    `zoom-out-right`,
    `slide-up`,
    `slide-down`,
    `slide-right`,
    `slide-left`,
    `flip-left`,
    `flip-right`,
    `flip-up`,
    `flip-down`,
];

const About = () => {
    return (
        <section id='about'>
            <div className='bg-white dark:bg-stone-950  px-20 md:px-52 pt-36 pb-10'>
                <h1 data-aos='fade-up' data-aos-delay='150' className='text-center font-bold text-2xl md:text-5xl mb-20 dark:text-neutral-100'>About</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-10 shadow-lg p-5 border rounded-xl'>
                    <div className=' w-32 h-32 justify-self-center self-center col-span-1 rounded-xl overflow-hidden' >
                        <Image data-aos='fade-right' data-aos-delay='200' src={'/static/images/YGBM8705.JPG'} width={100} height={100} alt='profile' className='w-full h-full object-cover  object-center aos-init' />

                    </div>
                    <div className='col-span-2 ' >

                        <h1 data-aos='fade-in' data-aos-delay='200' className='font-bold text-xl text-center lg:text-left md:text-3xl mb-5 text-slate-900 dark:text-neutral-100 mt-5 lg:mt-0'>My Name is Ripa Miptah Salam</h1>
                        <p data-aos='fade-out' data-aos-delay='250' className=' text-sm lg:text-lg text-center lg:text-left text-slate-900 dark:text-neutral-100'  >I am an Associate Degree majoring in Electronics Engineering at Politeknik Negeri Bandung. Interested in web Developer and Internet of Things.</p>
                    </div>
                    <div className='col-span-1 self-center pt-5 lg:pt-0'>
                        <h1 data-aos='fade-left' data-aos-delay='200' className='font-bold text-center lg:text-left text-gray-400 text-xl  lg:text-3xl mb-5' >My Tech</h1>
                        <div className='grid grid-cols-3 lg:grid-cols-2 gap-2'>
                            <div className='w-15 h-15  overflow-hidden'>
                                <Image src={'/static/images/next-js-logo.png'} width={75} height={75} alt='nextjs' />
                            </div>
                            <div className='w-15 h-15 overflow-hidden'>
                                <Image src={'/static/images/tailwindcss.png'} width={75} height={75} alt='tailwind' />
                            </div>
                            <div className='w-15 h-15 overflow-hidden'>
                                <Image src={'/static/images/nodejs.png'} width={75} height={75} alt='nodejs' />
                            </div>



                        </div>
                    </div>

                </div>

            </div>

        </section >

    )
}

export default About