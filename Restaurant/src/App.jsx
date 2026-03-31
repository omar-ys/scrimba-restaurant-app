import { useState } from 'react';
import './App.css'
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Order from './components/Order.jsx'
import Checkout from './components/Checkout.jsx'
import OrderState from './components/OrderState.jsx'

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [customerName, setCustomerName] = useState("");

  function addToOrder(newItem) {
    setOrderItems(prevOrder => [...prevOrder, newItem])
  }

  function removeFromOrder(indexToRemove) {
    console.log(indexToRemove)
    setOrderItems(prevOrder => prevOrder.filter((item, index) => index != indexToRemove))
  }

  function processPayment(name) {
    setCustomerName(name)
    setIsOrderComplete(true)
    setIsCheckoutOpen(false)
    setOrderItems([])
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
          <Checkout 
            closeCheckout={() => setIsCheckoutOpen(false)}
            onPay={processPayment}
          />
        )}

        {isOrderComplete && (
          <OrderState 
            name={customerName}
          />
        )}
      </main>
    </div>
  )
}

export default App
