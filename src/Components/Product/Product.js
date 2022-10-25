import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  const {
    title, description, image, id
  } = product;
  return (
    <div className="card p-8 w-96 h-auto mx-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl object-fill" />
      </figure>
      <div className="flex flex-col space-y-6 justify-between items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-600">{description.slice(0, 130)}</p>
        <div className="card-actions">
          <Link to={`/product/${id}`} type="button" className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
