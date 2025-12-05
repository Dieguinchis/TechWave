import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./context/CartContext/CartProvider";
import './App.css';
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';
import { Login } from './components/Login/Login';
import { AdminLayout } from './layouts/AdminLayout';
import { MainLayout } from "./layouts/MainLayout";
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nav />
        <main className="container">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<Login />}/>
              <Route 
              path="alta-productos" 
              element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>
                } 
                />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App