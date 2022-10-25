import React, { useEffect, useState } from 'react';
import { getProduct } from '../../Utils/productApi';
import Product from '../Product/Product';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    async function loadProduct() {
      setIsLoading(true);
      try {
        const data = await getProduct();
        setProducts(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setProducts([]);
      }
      setIsLoading(false);
    }
    loadProduct();
  }, []);

  return (
    <>
      <h1 className="text-center font-bold my-16 text-green-600 text-2xl md:text-4xl">
        All Products
      </h1>
      {error
      && <h1 className="text-center text-red-600 font-bold">{error}</h1>}
      { isLoading ? <h1 className="text-center text-red-600 font-bold">Loading.....</h1> : (
        <div className="grid w-[90%] mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-6">

          {
        products?.map((product) => <Product key={product.id} product={product} />)
      }
        </div>
      )}

    </>
  );
}

export default Products;
