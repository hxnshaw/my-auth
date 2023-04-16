import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { ToastContainer, Zoom } from "react-toastify";
import type { AppProps } from "next/app";
import AxiosConfig from "@/components/AxiosConfig";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AxiosConfig>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={true}
            pauseOnFocusLoss={false}
            transition={Zoom}
          />
        </AxiosConfig>
      </PersistGate>
    </Provider>
  );
}
