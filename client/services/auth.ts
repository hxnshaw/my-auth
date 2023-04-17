import axios from "axios";
import { ILoginResponse, IRegisterResponse } from "@/models/auth";

export function login(payload: { email: string; password: string }) {
  return axios.post<ILoginResponse>(`/login`, payload);
}

export function register(payload: {
  email: string;
  password: string;
  username: string;
}) {
  return axios.post<IRegisterResponse>(`/register`, payload);
}
