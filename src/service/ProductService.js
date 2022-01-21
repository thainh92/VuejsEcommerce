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

    updateProduct(data) {
        return axios.put(URL_PRODUCTS + "/edit", data);
    }

    findById(id) {
        return axios.get(URL_PRODUCTS + "/detail/" + id);
    }
}

export default new ProductService();