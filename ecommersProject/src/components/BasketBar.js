import React from 'react'
import { removeProduct } from '../store'
import { useDispatch, useSelector } from 'react-redux';
import BasketIcon from './BasketIcon';

function BasketBar() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const groupedProducts = products.reduce((acc, product) => {
        acc[product.id] = acc[product.id] || []; //Eğer acc nesnesinde henüz product.id ile bir anahtar yoksa (yani bu id için daha önce bir ürün eklenmediyse), boş bir dizi ([]) oluşturuluyor.Eğer zaten var ise, mevcut değeri (yani o id'ye ait ürünler dizisini) kullanıyor.
        acc[product.id].push(product); //Bu satır, o id'ye ait ürünü dizinin içine ekler. Aynı id'ye sahip birden fazla ürün olabilir, bu yüzden push kullanılıyor.
        return acc;
    }, {});

    // Create an array of products with their count
    const distinctProducts = Object.keys(groupedProducts).map((id) => {
        const product = groupedProducts[id][0];  //! Bu gruptaki ilk ürünü al
        const count = groupedProducts[id].length;  // Bu id'nin kaç tane ürünü var
        return { ...product, count }; //? Ürünü ve count değerini birleştir
    });
    return (
        <div className='hidden lg:block  sticky top-28'>
            <div className='border-2 border-gray-100 dark:border-slate-700 dark:bg-slate-800 rounded-md  '>
           {products.length > 0 ? <>
            {distinctProducts.map((product, i) => (
                <div key={i}>

                    <div className='flex items-start p-5'>
                        <img src={product.img} className='w-14 h-14 rounded-md' />
                        <div className='flex flex-col w-3/4 justify-start'>
                           <a href='/basket' > <p className='truncate ms-2 text-lg text-slate-600 dark:text-gray-200 hover:underline'>{product.title}</p></a>
                            <div className='flex justify-between animate__animated animate__fadeInDown'>

                                <p className='truncate ms-2 text-sm mt-2 text-slate-600 dark:text-gray-200 text-start'>{product.count} Adet</p>
                                <p className='truncate ms-2 text-sm mt-2 text-slate-600 dark:text-gray-200 text-start'>${product.price}</p>
                            </div>
                        </div>

                    </div>
                    <div className=' flex  justify-end px-5'>

                    <button type="button" onClick={() => dispatch(removeProduct(product.id))} className="animate__animated animate__fadeInLeft rounded-md border border-gray-700 px-3 py-2 text-sm font-medium text-slate-600 hover:text-white dark:text-white hover:bg-gray-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-gray-600 dark:hover:bg-slate-700 dark:focus:ring-primary-800">
                        <svg className="h-5 w-5  dark:text-gray-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" />
                            <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="currentColor" strokeLinejoin="round" />
                            <path d="M15.5 9.5L15 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 9.5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.5 9.5L9 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="currentColor" strokeLinejoin="round" />
                        </svg>
                    </button>
                    </div>
                    <hr className="my-4 mx-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                </div>
            ))}
          </> :<div className='flex flex-col items-center justify-center h-40'>
            <BasketIcon />
           <h2 className='text-2xl text-gray-500'>Sepetiniz Boş</h2>
          </div>
           
           }
               
                {products.length > 0 &&
                    <a
                        href='/basket'
                        type="button"
                        className="animate__animated animate__fadeIn inline-block rounded bg-primary-100 px-6 mb-4 pb-2 pt-2.5 text-xs font-medium  leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400">
                        Sepete Git
                    </a>}

            </div>
            <div className='flex flex-col border-2 border-gray-100 dark:border-slate-700 dark:bg-slate-800 rounded-md mt-5'>
                <div className="flex items-center mx-3 my-2">
                    {[1, 2, 3, 4, 5]?.map((star, i) => (
                        <svg
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'
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
                    <p className='text-sm font-medium text-gray-500 dark:text-gray-400 text-start mx-3 break-words' >Aldığımız ürün orijinal çıktı. çok sevindik. Tavsiye edilir.</p>
                    <p className='text-sm font-medium text-gray-500 dark:text-gray-400 text-start mx-3 break-words mt-4 mb-2' >22.11.2024</p>
            </div>
        </div>
    )
}

export default BasketBar
