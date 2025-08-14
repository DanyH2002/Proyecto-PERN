import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormProduct from './components/Products/FormProduct'
import ProductList from './components/Products/ProductList'
import ProductView from './components/Products/ProductView'
import FormUser from './components/Users/FormUser'
import UserList from './components/Users/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormProduct></FormProduct>
      <ProductList></ProductList>
      <ProductView></ProductView>
      <FormUser></FormUser>
      <UserList></UserList>
    </>
  )
}

export default App
