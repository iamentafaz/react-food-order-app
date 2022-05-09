import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showHideCart, setShowHideCart] = useState(false);
  
  const showCartHandler = () => {
    setShowHideCart(true);
  }
  const hideCartHandler = () => {
    setShowHideCart(false);
  }
  return (
    <CartProvider>
      { showHideCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
