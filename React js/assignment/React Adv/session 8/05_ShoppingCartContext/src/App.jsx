import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import CartProvider from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
      {/* 
        Main Page Wrapper: 
        min-h-screen ensures the gray background covers the whole page.
      */}
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
        
        {/* Hero / Header Section */}
        <header className="bg-white border-b border-gray-200 py-10 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Context API Store
            </h1>
            <p className="mt-3 text-lg text-gray-500 font-medium">
              A modern shopping experience powered by React Context.
            </p>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="pt-8">
          
          {/* Products Section */}
          <section>
            <ProductList />
          </section>

          {/* 
            Styled Divider 
            Replaces the boring <hr /> with a subtle, centered fading line
          */}
          <div className="max-w-4xl mx-auto my-12 px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Cart Section */}
          <section>
            <Cart />
          </section>

        </main>
      </div>
    </CartProvider>
    </>
  )
}

export default App
