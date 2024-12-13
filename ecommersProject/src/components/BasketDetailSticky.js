import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearProduct } from '../store';

function BasketDetailSticky() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    return (
        <div className={`hidden lg:block  sticky top-28 ${products.length === 0 ? 'lg:hidden ' : 'lg:block '}`}>
            <div className='border-2 border-gray-100 dark:border-slate-700 dark:bg-slate-800 rounded-md  '>
                <div className='flex flex-col items-center justify-start mx-5 my-5 '>

                    <h2 className='text-xl text-blue-600 dark:text-blue-300'>Toplam ürünler ({products.length})</h2>
                    <h2 className='text-2xl text-gray-600 mt-2 dark:text-gray-200 animate__animated animate__fadeInDown'>${products.reduce((total, product) => total + product.price, 0).toFixed(2)}</h2>


                <a
                    href='#'
                    className="animate__animated animate__zoomIn inline-block rounded mt-10 bg-primary-100 px-6  pb-2 pt-2.5 text-lg  font-medium  leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400">
                    Alışverişi Tamamla
                </a>
                <button type="button" onClick={() => dispatch(clearProduct())} className=" inline-flex mt-5 items-center rounded-md border border-gray-700 px-3 py-2 text-sm font-medium text-slate-600 hover:text-white dark:text-white hover:bg-gray-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-gray-600 dark:hover:bg-slate-700 dark:focus:ring-primary-800">
                        <svg className="h-5 w-5 me-2 dark:text-gray-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" />
                            <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="currentColor" strokeLinejoin="round" />
                            <path d="M15.5 9.5L15 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 9.5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.5 9.5L9 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="currentColor" strokeLinejoin="round" />
                        </svg>
                         Sepeti Temizle
                    </button>
                </div>
            </div>
            <div className='flex flex-col border-2 border-gray-100 dark:border-slate-700 dark:bg-slate-800 rounded-md mt-5'>
                <div className="flex items-center mx-3 my-2">
                    {[1, 2, 3, 4, 5]?.map((star, i) => (
                        <svg
                            key={i}
                            className={`h-4 w-4 ${i < 3 ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2,0,0,0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                    ))}
                </div>
                <p className='text-sm font-medium text-gray-500 dark:text-gray-400 text-start mx-3 break-words' >Kargolama sorunlu olsada ürünü beğendik.</p>
                <p className='text-sm font-medium text-gray-500 dark:text-gray-400 text-start mx-3 break-words mt-4 mb-2' >22.11.2024</p>
            </div>
        </div>
    )
}

export default BasketDetailSticky