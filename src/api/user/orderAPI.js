import axiosClient from "../axiosClients";

const url = "order/user";
const orderAPI = {
  addOrder: (order) => {
    return axiosClient.post(url, order);
  },

  getOrder: () => {
    return axiosClient.get(url);
  },

  getPendingOrder: () => {
    const url = `order/user/pending`;
    return axiosClient.get(url);
  },

  updateOrderPending: (order) => {
    return axiosClient.put(url, order);
  },
};

export default orderAPI;
