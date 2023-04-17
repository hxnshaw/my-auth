import axios from "axios";
import { ILoginResponse } from "@/models/auth";

export function login(payload: { email: string; password: string }) {
  return axios.post<ILoginResponse>(`/login`, payload);
}

export function register(payload: {
  email: string;
  password: string;
  userName: string;
}) {
  return axios.post<ILoginResponse>(`/register`, payload);
}
