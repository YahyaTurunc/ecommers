import React from 'react'
import '../App.css';
import { Provider } from "react-redux";
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import BasketBar from '../components/BasketBar';
import store from '../store';
import Footer from '../components/Footer';
function Home() {
    return (
        <Provider store={store}>

            <div className="App ">
                <Navbar />
                <div className=' mx-2 sm:mx-10 grid grid-cols-6 gap-4 my-10 '>

                    <ProductList />
                    <div className=''>

                        <BasketBar />
                    </div>
                </div>
                <Footer className={'home'}/>
            </div>

        </Provider >
    )
}

export default Home