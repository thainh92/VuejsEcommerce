import axios from "axios";

const URL_ORDERS = "http://localhost:5050/api/v1/orders";

class OrderService {
    getAll(params) {
        return axios.get(URL_ORDERS, {
            params: params
        });
    }
}

export default new OrderService();