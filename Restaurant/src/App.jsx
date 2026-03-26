import { useState } from 'react';
import './App.css'
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Order from './components/Order.jsx'

function App() {
  const [orderItems, setOrderItems] = useState([]);

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
          <Order items={orderItems} removeFromOrder={removeFromOrder} />
        )}
      </main>
    </div>
  )
}

export default App
