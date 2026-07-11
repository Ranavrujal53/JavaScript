import ProductCard from './Component/ProductCard';

function App() {
  return (
    <>
      <ProductCard productName="Laptop" price={50000} />
      <ProductCard productName="Mobile" price={20000} />
      <ProductCard productName="Headphones" price={3000} />
    </>
  );
}

export default App;