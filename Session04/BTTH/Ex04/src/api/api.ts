import { inventoryClient, paymentClient, userClient } from "./apiClient";

export const AppApi = {
  inventory: {
    getProducts: async () => {
      const response = await inventoryClient.get("/products");
      return response.data;
    },
  },

  payment: {
    getTransactions: async () => {
      const response = await paymentClient.get("/transactions");
      return response.data;
    },
  },

  user: {
    getProfile: async () => {
      const response = await userClient.get("/profile");
      return response.data;
    },
  },
};
