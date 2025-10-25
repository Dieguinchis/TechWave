import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav/nav'
import { ItemListContainer } from './components/ItemListContainer/itemlistcontainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext/CartProvider"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <main className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<h2>Carrito</h2>} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App