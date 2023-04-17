import { ReactNode } from "react";
import axios from "axios";

export default function AxiosConfig({ children }: { children: ReactNode }) {
  axios.defaults.baseURL = "http://localhost:8080/api/v1/anons";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  return <>{children}</>;
}
