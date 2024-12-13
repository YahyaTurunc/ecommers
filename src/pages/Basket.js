import React from 'react'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import store from '../store'
import BasketDetails from '../components/BasketDetails'
import BasketDetailSticky from '../components/BasketDetailSticky'
import Footer from '../components/Footer'

function Basket() {
  return (<Provider store={store}>
    <div className="App">
      <Navbar />
      <div className=' mx-10 grid grid-cols-6 gap-4 my-10'>
        <BasketDetails />
        <div className=''>
          <BasketDetailSticky />
        </div>
      </div>
      <Footer className={'basket'} />

    </div>
  </Provider >
  )
}

export default Basket