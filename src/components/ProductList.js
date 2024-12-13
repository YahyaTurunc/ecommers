import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct} from '../store';
import { productData } from '../data/product-data';

function ProductList() {
    const dispatch = useDispatch();
    const favori = productData.map((product) => product.favorited)
    const [favorited, setFavorited] = useState(favori)
    const [searchQuery, setSearchQuery] = useState(''); // Arama sorgusunu tutmak için state

    const handleFavorite = () => {
        if (favorited) {
            setFavorited(false)
        } else {
            setFavorited(true)
        }
    }
    const handleAddProduct = (product) => {
        dispatch(addProduct(product))

    }

    // Arama sorgusuna göre ürünleri filtreleme
    const filteredProducts = productData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className='flex flex-col col-span-6 lg:col-span-5 '>
            <section className="bg-gray-50 py-8 antialiased dark:bg-slate-800 md:py-12 rounded-lg">
                <div className="mx-auto max-w-screen-xl px-10 2xl:px-0">
                    <div className="mb-4 items-center justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <nav className="flex items-center  animate__animated animate__fadeInDown" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                        </svg>
                                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Products</a>
                                    </div>
                                </li>

                            </ol>
                        </nav>
                        <div className=" animate__animated animate__fadeInDown">
                            <input
                                placeholder="Search..."
                                className="input shadow-lg  border-gray-300 px-5 py-3 rounded-xl w-56 transition-all  outline-none"
                                name="search"
                                type="search"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                        </div>

                    </div>
                    {filteredProducts.length === 0 && (
                        <p className="mb-4 animate__animated animate__fadeInDown text-2xl font-semibold text-gray-500 dark:text-gray-400">
                            Ürün Bulunamadı
                        </p>)}
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
                        {filteredProducts.map((item, i) => (

                            <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 ">
                                <div className="h-56 w-full">
                                    <a href="#">
                                        <img className="mx-auto h-full  rounded-md " src={item.img} alt="" />
                                        {/* <img className="mx-auto hidden h-full dark:block rounded-md" src="https://picsum.photos/240/240/" alt="" /> */}
                                    </a>
                                </div>
                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                      {item.littleTitle ? (<span className=" me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">{item.littleTitle}</span>) :<div></div>}  

                                        <div className="flex items-center justify-end gap-1">



                                            <button type="button" onClick={handleFavorite} data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">

                                                <svg className={`h-5 w-5 ${favorited ? "fill-red-500" : "text-gray-500"
                                                    } transition-colors duration-300`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke={`${favorited ? "red" : "currentColor"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>

                                    <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white animate__animated animate__fadeInDown">{item.title}</a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <div className="flex items-center">
                                            {[1, 2, 3, 4, 5]?.map((star, i) => (
                                                <svg
                                                    key={i}
                                                    className={`h-4 w-4 ${i < item.starsCount ? 'text-yellow-400' : 'text-gray-300'
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

                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.starsCount}.0</p>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({item.commit})</p>
                                    </div>



                                    <div className="mt-4 flex items-center justify-between gap-4">
                                        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white animate__animated animate__fadeInDown">${item.price}</p>

                                        <button type="button" onClick={() => handleAddProduct(item)} className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            <svg className="  h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                     {filteredProducts.length !== 0 && (<div className="w-full text-center animate__animated animate__fadeInDown">
                        <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
                    </div>)}
                </div>

            </section>
            {/* <ul>
                {urunler.map((product,i) => (<div key={i}>
                    <li >{product.name}- Price {product.price}</li>
                    <button className=' border-2 text-emerald-600 px-10' onClick={() => dispatch(addProduct(product))}>Ekle</button>
                </div>))}
            </ul>

            <h1>Sepet</h1>
            <ul>
                {products.length === 0 ? "Sepet Boş" : <>

                    {products.map((product,i) => (<div key={i}>
                        <li>{product.name}- Price{product.price}</li>
                        <button className=' border-2 text-red-600 px-10' onClick={() => dispatch(removeProduct(product.id))}>Sil</button>
                    </div>))}
                </>}
            </ul>
            <h1>sepeti temizle</h1>
            <button className=' border-2 text-red-600 px-10' onClick={() => dispatch(clearProduct())}>Temizle</button> */}
        </div>
    )
}

export default ProductList