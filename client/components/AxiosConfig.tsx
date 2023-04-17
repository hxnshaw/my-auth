import { ReactNode } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import axios from "axios";

export default function AxiosConfig({ children }: { children: ReactNode }) {
  const { token } = useAppSelector((state) => state.auth);

  axios.defaults.baseURL = "http://127.0.0.1:8080";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  return <>{children}</>;
}
