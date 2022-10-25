import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../Utils/productApi';

function ProductDetails() {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function loadProductDetails() {
      setIsloading(true);
      try {
        const data = await getProductDetails(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
        setProduct('');
      }
      setIsloading(false);
    }
    loadProductDetails();
  }, [id]);
  console.log(isloading);

  return (
    <>
      <h1 className="text-4xl text-green-600 my-16 font-bold text-center">Product Details</h1>
      {error
      && <h1 className="text-center text-red-600 font-bold">{error}</h1>}
      {
    isloading && <h2 className="text-center mt-6 text-red-500 font-bold">Loading...</h2>
      }
      {!error && !isloading && (
      <div>
        <div className="card w-3/4 mx-auto space-x-8 card-side bg-base-100  shadow-xl">
          <figure><img className="object-fill" src={product.image} alt="Product" /></figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{product.title}</h2>
            <p className="text-md text-slate-600">{product.description}</p>
            <div className="card-actions justify-start">
              <button type="button" className="btn px-8 btn-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>
      )}

    </>
  );
}

export default ProductDetails;
