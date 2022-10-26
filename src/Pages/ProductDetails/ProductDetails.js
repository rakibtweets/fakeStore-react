/* eslint-disable default-param-last */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../Utils/productApi';

const initialState = {
  isLoading: false,
  product: {},
  error: '',
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'request':
      return {
        ...state,
        isLoading: true,
        ...payload
      };
    case 'success':
      return {
        ...state,
        isLoading: false,
        product: payload.product
      };
    case 'error':
      return {
        ...state,
        error: payload.error,
        ...payload
      };

    default:
      return state;
  }
};

function ProductDetails() {
  const { id } = useParams();

  const [{ error, product, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function loadProductDetails() {
      dispatch({ type: 'request' });
      try {
        const data = await getProductDetails(id);
        dispatch({
          type: 'success',
          payload: {
            product: data,
          }
        });
      } catch (err) {
        dispatch({
          type: 'error',
          payload: {
            error: err.message,
            isLoading: false
          }
        });
      }
    }
    loadProductDetails();
  }, [id]);

  return (
    <>
      <h1 className="text-4xl text-green-600 my-16 font-bold text-center">Product Details</h1>
      {error
      && <h1 className="text-center text-red-600 font-bold">{error}</h1>}
      {
    isLoading && <h2 className="text-center mt-6 text-red-500 font-bold">Product Loading...</h2>
      }
      {!error && !isLoading && (
      <div>
        <div className="card w-3/4 mx-auto space-x-8 card-side bg-base-100  shadow-xl p-4">
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
