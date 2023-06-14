import axiosClient from "../axiosClients";

const url = "products";
const productAPI = {
  getAll: () => {
    return axiosClient.get(url);
  },
  getProductInfo: (id) => {
    return axiosClient.get(`${url}/${id}`);
  },
  filter: (params) => {
    return axiosClient.get(url, { params });
  },
  //   login: (account) => {
  //     const url = `auth/login`;
  //     return axiosClient.post(url, account);
  //   },
  getSidebar: () => {
    let newURL = url + "/distinct/aroma-brand-type";
    return axiosClient.get(newURL);
  },
};

export default productAPI;
