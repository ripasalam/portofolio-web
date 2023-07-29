import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import projects from './project.json'



const Project = () => {


    return (
        <section id='project'>
            <div className=' px-20 md:px-52 pt-44 pb-20'>
                <h1 data-aos='fade-up' data-aos-delay='150' className='text-center text-transparent font-bold text-2xl md:text-6xl mb-20 bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500'> Featured Projects</h1>

                {projects.map((project, idx) => (
                    <Link href={`${project.link}`} key={idx}>
                        <div data-aos='fade-up' data-aos-delay='300' className='grid grid-cols gap-24 border py-4 px-3 rounded-lg shadow-lg hover:opacity-70 mb-5 aos-init '>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 hover:opacity-70' data-aos='fade-up' data-aos-delay='300'>
                                <Image src={project.img} alt='project' width={900} height={900} className='rounded-md shadow-xl' />
                                <div className='lg:pt-0 text-center lg:text-left' >
                                    <h1 className='font-bold text-2xl text-neutral-700  lg:text-4xl mb-10 dark:text-neutral-100'>{project.title}</h1>
                                    <h1 className=' font-semibold text-neutral-500 text-xl'>{project.description}</h1>
                                </div>
                            </div>
                        </div>

                    </Link>


                ))
                }

            </div>
        </section>
    )
}

export default Project
