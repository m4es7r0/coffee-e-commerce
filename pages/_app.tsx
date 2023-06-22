import type { AppProps } from "next/app";
import "../app/assets/styles/globals.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
