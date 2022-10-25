/* eslint-disable import/prefer-default-export */

import axios from 'axios';

export const getProduct = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  if (!response.ok) {
    return {
      message: 'Fail to fetch Products',
      status: 500,
    };
  }
  return data;
};

export const getProductDetails = async (id) => {
  const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
  if (result.status !== 200) {
    return {
      message: 'Fail to fetch Product',
    };
  }
  return result.data;
};
