import axios from "axios";

const URL_PRODUCTS = "http://localhost:5050/api/v1/products";

class ProductService {

    getAll(params) {
        return axios.get(URL_PRODUCTS, {
            params: params
        });
    }

    deleteById(id) {
        return axios.delete(URL_PRODUCTS + `/delete/${id}`)
    }

    addProduct(data) {
        return axios.post(URL_PRODUCTS + "/add", data);
    }

    updateProduct(id, data) {
        return axios.post(URL_PRODUCTS + "/edit/" + id, data);
    }
}

export default new ProductService();