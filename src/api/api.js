import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Receieved response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error loggin in:', error)
    throw error;
  }f
};

export const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const saveProduct = async (productData) => {
    try {
      const response = await axios.post(`${API_URL}/products`, productData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
