import axiosClient from "../axiosClients";

const authAPI = {
  login: (account) => {
    const url = `auth/login`;
    return axiosClient.post(url, account);
  },
  register: (info) => {
    const url = `auth/register`;
    return axiosClient.post(url, info);
  },
};

export default authAPI;
