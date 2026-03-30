import { useState } from 'react';
import './App.css'
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Order from './components/Order.jsx'
import Checkout from './components/Checkout.jsx'

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  function addToOrder(newItem) {
    setOrderItems(prevOrder => [...prevOrder, newItem])
  }

  function removeFromOrder(indexToRemove) {
    console.log(indexToRemove)
    setOrderItems(prevOrder => prevOrder.filter((item, index) => index != indexToRemove))
  }

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <Menu addToOrder={addToOrder} />
        {orderItems.length > 0 && (
          <Order 
            items={orderItems} 
            removeFromOrder={removeFromOrder}
            openCheckout={() => setIsCheckoutOpen(true)}
          />
        )}
        {isCheckoutOpen && (
          <Checkout closeCheckout={() => setIsCheckoutOpen(false)} />
        )}
      </main>
    </div>
  )
}

export default App
