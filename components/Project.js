import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import projects from './project.json'
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


const Project = () => {


    return (
        <section id='project'>
            <div className=' px-20 md:px-52 pt-44 pb-20'>
                <h1 data-aos='fade-up' data-aos-delay='150' className='text-center font-bold text-2xl md:text-5xl mb-20'>Projects</h1>
                <div className='grid grid-cols gap-24 border py-4 px-3 rounded-lg shadow-lg hover:opacity-70 '>
                    {projects.map((project, idx) => (
                        <Link href={`${project.link}`} key={idx}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 hover:opacity-70' data-aos='fade-up' data-aos-delay='300'>
                                <Image src={project.img} alt='project' width={900} height={900} className='rounded-md shadow-xl' />
                                <div className='lg:pt-0 text-center lg:text-left' >
                                    <h1 className='font-bold text-2xl  lg:text-4xl mb-10 dark:text-neutral-100'>{project.title}</h1>
                                    <h1 className=' font-semibold text-gray-400 text-xl'>{project.description}</h1>
                                </div>
                            </div>
                        </Link>


                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project
