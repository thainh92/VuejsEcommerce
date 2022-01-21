import axios from "axios";

const URL_CATEGORIES = "http://localhost:5050/api/v1/categories";

class CategoryService {
    getAll(params) {
        return axios.get(URL_CATEGORIES, {
            params: params
        });
    }
}

export default new CategoryService();