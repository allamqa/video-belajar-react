import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchDataCall = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/products`);
        return res.data.products;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

export const addDataProduct = async (values) => {
    try {
        const res = await axios.post(`${BASE_URL}/products/add`, values);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error; 
    }
}

export const fetchSingleData = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/products/${id}`);
        return res
    } catch (error) {
        console.error("Error fetching single data:", error);
        throw error; 
    }
}

export const updateProduct = async (id, values) => {
    try {
        const res = await axios.put(`${BASE_URL}/products/${id}`, values);
        console.log(res);
        return res
    } catch (error) {
        console.error("Error updating product:", error);
        throw error; 
    }
}


export const deleteProduct = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/products/${id}`);
        console.log(res);
        return res
    } catch (error) {
        console.error("Error updating product:", error);
        throw error; 
    }
}
