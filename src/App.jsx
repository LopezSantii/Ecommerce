import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer"
import ItemDitail from './pages/ItemDitail/ItemDetail'
import Error404 from './pages/Error404/Error404'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDitail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
