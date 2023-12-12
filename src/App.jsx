import React, { useState, createContext } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Gradient from "./components/gradient/Gradient";
import Products from "./components/productPage/ProductsList";
import Chart from "./components/chart/Chart";

export const dataContext = createContext(); 

const App = () => {
  const [Cart, setCart] = useState({
    cart: [],
  });

  const addToCart = (item) => {
    setCart((prevState) => {
      return { ...prevState, cart: [...prevState.cart, item] };
    });
  };

  return (
    <dataContext.Provider value={{ Cart, addToCart }}>
      <div>
        <Header />
        <Products />
        <Gradient />
        <Chart />
        <Footer />
      </div>
    </dataContext.Provider>
  );
};

export default App;
