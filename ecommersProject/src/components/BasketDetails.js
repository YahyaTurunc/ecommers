import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store';
import BasketIcon from './BasketIcon';

function BasketDetails() {
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
        <div className={`flex flex-col col-span-6 lg:col-span-5 ${products.length === 0 ? 'lg:col-span-6 ' : 'lg:col-span-5 '}`}>
            <section className="bg-gray-50 py-8 antialiased dark:bg-slate-800 md:py-12 rounded-lg">
                <div className="mx-auto max-w-screen-xl px-10 2xl:px-0">
                    {products.length > 0 ? <>
                        {distinctProducts.map((product, i) => (

                            <article key={i} className="mx-2 my-5 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-slate-700 md:mx-auto">
                                <div className="flex flex-col md:flex-row">
                                    <div className="items-center p-5 flex justify-center">
                                        <img className="rounded-md shadow-lg h-36" src={product.img} alt="Shop image" />
                                    </div>
                                    <div className="p-5 md:w-5/6 md:p-8 text-start">

                                        <p className=" mt-2 text-md  text-gray-800 dark:text-gray-100 md:mt-6 md:text-xl">{product.title}</p>
                                        <p className="animate__animated animate__fadeInDown mt-2 text-sm  text-gray-500 dark:text-gray-100 md:text-lg">{product.count} Adet</p>
                                        <div className='flex justify-between items-center mt-5'>

                                            <button type="button" onClick={() => dispatch(removeProduct(product.id))} className="animate__animated animate__fadeInRight inline-flex items-center rounded-md border border-gray-700 px-3 py-2  text-sm font-medium text-slate-600 hover:text-white dark:text-white hover:bg-gray-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-gray-600 dark:hover:bg-slate-500 dark:focus:ring-primary-800">
                                                <svg className="h-5 w-5  dark:text-gray-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" />
                                                    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="currentColor" strokeLinejoin="round" />
                                                    <path d="M15.5 9.5L15 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 9.5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.5 9.5L9 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="currentColor" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <div>
                                                {product.off && (<span className="relative rounded-md bg-orange-400 px-2 py-1 text-xs  text-white dark:bg-orange-500">{product.off}% İndirim</span>)}
                                                <p className="mt-2 text-md text-end  text-gray-800 dark:text-gray-100  md:text-xl animate__animated animate__fadeIn">${product.price}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </article>
                        ))}
                    </>
                        :
                        <div className='flex flex-col items-center justify-center h-40'>
                            <BasketIcon />
                            <h2 className='text-3xl text-gray-900 font-bold dark:text-gray-200'>Sepetin şu an boş</h2>
                            <h3 className='text-md md:text-xl text-gray-500 dark:text-gray-400 md:w-2/3 mt-3'>Sepetini Mihman deri'nin fırsatlarla dolu dünyasından doldurmak için
                                aşağıdaki ürünleri incelemeye başlayabilirsin.</h3>
                        </div>

                    }


                </div>

            </section >
        </div>

    )
}

export default BasketDetails