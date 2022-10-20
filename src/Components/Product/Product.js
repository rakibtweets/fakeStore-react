import React from 'react';

function Product({ product }) {
  const { title, description, image } = product;
  return (
    <div className="card p-8 w-96 min-h-60 mx-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl object-fill" />
      </figure>
      <div className="flex flex-col space-y-6 justify-between items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-600">{description.slice(0, 130)}</p>
        <div className="card-actions">
          <button type="button" className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
