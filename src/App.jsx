import { Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer"
import ItemDitail from './pages/ItemDitail/ItemDetail'
import Error404 from './pages/Error404/Error404'
import Footer from "./components/Footer/Footer"
import { CartProvider } from './context/CartContext.jsx';
import { ModalProvider } from "./context/ModalContex"
import CartDetail from "./components/CartDetail/CartDetail"
import { OrderProvider } from "./context/OrderContex"

function App() {

  return (
    
    <ModalProvider>
      <CartProvider>
        <NavBar />
          <OrderProvider>
            <CartDetail />
            <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDitail />} />
            <Route path='*' element={<Error404 />} />
            </Routes>
          </OrderProvider>
        <Footer />
      </CartProvider>
    </ModalProvider>
    
  )
}

export default App
