import axios from "axios";

const API_ENDPOINT="http://localhost:8080"
class ProductService{

    // Fetch all products
    static async listAllProducts() {
        try {
            const response = await axios.get(`${API_ENDPOINT}/products`)
            return response.data;
        }catch (error){
            throw error;
        }
    }

    // Fetch a single product by its ID
    static async fetchProductById(productId) {
        try {
            const response = await axios.get(`${API_ENDPOINT}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with id ${productId}:`, error);
            throw error;
        }
    }

    // Add a new product
    static async addProduct(product) {
        try {
            const response = await axios.post(`${API_ENDPOINT}/products`, product);
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }

    // Update an existing product
    static async updateProduct(productId, updatedProduct) {
        try {
            const response = await axios.put(`${API_ENDPOINT}/products/${productId}`, updatedProduct);
            return response.data;
        } catch (error) {
            console.error(`Error updating product with id ${productId}:`, error);
            throw error;
        }
    }

// Delete a product
    static async deleteProduct(productId) {
        try {
            const response = await axios.delete(`${API_ENDPOINT}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting product with id ${productId}:`, error);
            throw error;
        }
    }

}

export  default ProductService