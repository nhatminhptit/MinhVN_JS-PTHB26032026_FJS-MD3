import { apiClient } from "./apiClient";

export const AuthApi = {
    login: async (data: any) => await apiClient.post("/auth/login", data)
}