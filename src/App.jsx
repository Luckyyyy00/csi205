
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Components from './pages/Components'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Animation from './pages/Animation'
import ForwardToHome from './pages/ForwardToHome'
import AppLauout from './layouts/AppLauout'
import Todos from './pages/Todos'
import Products from './pages/Products'
import Carts from './pages/Carts'
import Login from './pages/Login'

import { useState, useEffect } from 'react'
import { fetchProducts } from './data/products'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')


  useEffect(() => setProducts(fetchProducts()), [])

  useEffect(() => console.log(products),[products])

  if (token === ''){

  return(<Login setToken={setToken} setRole={setRole}/>)
  } else{
  
  return (
    <div>
      <BrowserRouter basename='/csi205/'>
      <Routes>
        <Route element={<AppLauout products= {products} carts={carts} setToken={setToken}/>}>
        <Route path='home' element={<Home />}/>
        <Route path='components' element={<Components />} />
        <Route path='animation' element={<Animation/>}/>
        <Route path='calculator' element={<Calculator/>} />
        <Route path='todos' element={<Todos/>} />
        <Route path='products' element={<Products products={products} carts={carts} setCarts={setCarts}/>}/>
        <Route path='carts' element={<Carts carts={carts} setCarts={setCarts}/>}/>
        <Route path='*' element={<ForwardToHome/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
  }
}

export default App
