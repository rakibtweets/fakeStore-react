import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

function Products() {
  const [proudcts, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-center font-bold my-16 text-green-600 text-2xl md:text-4xl">
        All Products
      </h1>
      <div className="grid w-[90%] mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-6">

        {
        proudcts.map((product) => <Product key={product.id} product={product} />)
      }
      </div>
    </>
  );
}

export default Products;
