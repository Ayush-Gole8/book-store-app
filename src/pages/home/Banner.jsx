import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse rounded-3xl py-16 justify-between items-center gap-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-6 md:px-12  shadow-lg'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" className='rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300' />
        </div>

        <div className='md:w-1/2 w-full text-center md:text-left'>
            <h1 className='md:text-5xl text-2xl font-bold mb-7 tracking-wide leading-snug'>New Releases This Week</h1>
            <p className='mb-10 text-sm md:text-base leading-relaxed'>
            "Refresh your bookshelf with this week's most anticipated literary releases! Whether you're into gripping thrillers, inspiring memoirs, or thought-provoking fiction, there's a new book waiting to capture your imagination."
            </p>

            <button className='btn-primary bg-white text-purple-700 font-semibold px-6 py-2 rounded-3xl shadow-md hover:bg-purple-600 hover:text-white transition-colors duration-300'>
                Subscribe
            </button>
        </div>
    </div>
);

  
}

export default Banner