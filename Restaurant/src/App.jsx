import './App.css'
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Order from './components/Order.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <Menu />
        <Order />
      </main>
    </div>
  )
}

export default App
