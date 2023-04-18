import { toast } from "react-toastify";

export function notify(
  message: string,
  status: "warning" | "success" | "error" | "info",
  toastId?: string
) {
  if (status === "success")
    toast.success(message, {
      toastId: toastId || encodeURI(message),
    });
  if (status === "error")
    toast.error(message, {
      toastId: toastId || encodeURI(message),
    });
  if (status === "info")
    toast.info(message, {
      toastId: toastId || encodeURI(message),
    });
  if (status === "warning")
    toast.warning(message, {
      toastId: toastId || encodeURI(message),
    });
}

export function axiosErrorNotifier(message: string) {
  notify(
    message || "Poor connection, cannot fetch data",
    "error",
    "axios-error"
  );
}
