import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CartProvider"
import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState(false);
  const onCartState = () => {
    setCartState(!cartState);
  };
  return (
    <CardProvider>
      {cartState && <Cart cartStateHandler={onCartState} />}
      <Header cartStateHandler={onCartState} />
      <main>
        <Meals />
      </main></CardProvider>
    
  );
}

export default App;
