import React from 'react'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer"
import Gradient from './components/gradient/Gradient'
import { createContext} from 'react'
import Products from './components/productPage/ProductsList'
export const dataContext = createContext();

const App = () => {
  const initialValue={
    cartlist:[]
  }

  return (
    <dataContext.Provider value={initialValue}>
      <div>
        <Header />
        <Products />
        <Gradient />
        <Footer />
      </div>
    </dataContext.Provider>
  )
}

export default App
