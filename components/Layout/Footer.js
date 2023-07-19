import React from 'react'

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

const Footer = () => {
    return (
        <div className='w-full bordort-t  grid grid-cols-1 md:grid-cols-2 pt-5  lg:pt-10 pb-10 mx-auto bg-white dark:bg-stone-950 dark:border-b dark:dark-stone-600 px-4 sm:px-20 shadow-md'>
            <div className='row-start-2 md:row-start-1 text-center justify-self-center md:justify-self-start md:text-left'>
                <div>
                    <h1 className=' text-lg md:text-xl font-bold dark:text-neutral-100 text-slate-700'>Ripa Miptah Salam</h1>
                    <p className='text-base text-gray-500 dark:text-neutral-100'>Electronics Engineer.Interested in web development</p>

                </div>

            </div>
            <div className='row-start-1 mb-10 md:block md:mb-0'>
                <div className=' justify-center md:justify-end  flex space-x-6 space-y-0'>
                    {NAV_ITEMS.map((item, idx) => (
                        <a
                            href={`#${item.page}`}
                            key={idx}
                            className=" text-base self-center block lg:inline-block text-neutral-500 hover:text-neutral-800"
                        >
                            {item.label}
                        </a>
                    ))}

                </div>



            </div>
        </div>
    )
}

export default Footer
