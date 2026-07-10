import { apiClient } from "./apiClient";

export interface SearchProductParams {
  search: string;
  page: number;
}

export const ProductApi = {
  search: async (params: SearchProductParams) => {
    const limit = 10;

    const skipItem = (params.page - 1) * limit;

    return await apiClient.get("/products/search", {
      params: {
        q: params.search,
        limit: limit,
        skip: skipItem,
      },
    });
  },
};
