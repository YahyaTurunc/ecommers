import React from 'react'
import { useSelector } from 'react-redux';
import ToggleSwitch from './ToggleSwitch';
import BasketIcon from './BasketIcon';


function Navbar() {
    const products = useSelector((state) => state.products);

    const items = [
        {
            title: "Home",
            url: "/"
        },
        
        {
            title: "Cart",
            url: "/basket"
        }
    ]
    return (
        <div className="navbar sticky top-0 z-10 bg-gray-100 border-b-2 dark:border-gray-700 dark:bg-slate-900 px-3 sm:px-20 py-5">
            <div className='flex justify-between items-center'>

            <a href='/'> <img src='logo512.png' alt='navbar-logo' width={50} height={50} /></a>

                <ul className=' items-center gap-5 hidden md:flex animate__animated animate__zoomIn'>
                    {items.map((item, i) => (<a key={i} href={item.url}><li className=' tracking-wider hover:underline underline-offset-8 text-slate-600 dark:text-gray-200 font-small text-lg hover:text-blue-600 dark:hover:text-blue-400 '>{item.title}</li></a>))}
                </ul>
                <div className='flex items-center gap-5'>

                    <span className=' text-lg text-slate-600 dark:text-gray-200'>|</span>
                    <BasketIcon />
                    <a href='/basket' className='absolute ms-11 mt-5'>
                        <span className='  rounded-full bg-red-600 w-5 h-5 flex items-center justify-center text-white text-sm cursor-pointer'>{products?.length}</span>
                    </a>
                    <ToggleSwitch />
                </div>
            </div>
        </div>
    )
}

export default Navbar
