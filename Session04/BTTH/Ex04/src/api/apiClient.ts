import axios, { type AxiosInstance } from 'axios';

export const inventoryClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/inventory',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' }
});

export const paymentClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/payment',
  timeout: 5000, 
  headers: { 'Content-Type': 'application/json' }
});

export const userClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/users',
  timeout: 2000,
  headers: { 'Content-Type': 'application/json' }
});

