import axios from 'axios';
import { setAlert } from './alert';
import { PRODUCT_FAIL, GET_FILTERED_PRODUCTS } from './types';

export const createProduct = (form, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const res = await axios.post('http://localhost:4000/api/product', form, config);
  } catch (err) {
    console.error(err);
    //
  }
};

export const getFilteredProducts = (skip, limit, filters = {}) => async dispatch => {
  const data = { limit, skip, filters };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(`http://localhost:4000/api/product/by/search`, data, config);
    await dispatch({
      type: GET_FILTERED_PRODUCTS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    // dispatch({
    //   type: PRODUCT_FAIL,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};