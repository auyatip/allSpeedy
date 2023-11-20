import AuthWrapper from "@/_helpers/authentication.helper";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useState } from "react";
import Layout from '@/components/layout';

// theme
import { ConfigProvider } from "antd";
import { theme } from "../utils/theme";

// store
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={theme}>
          <AuthWrapper> 
            <Layout pageProps={pageProps}>
              {getLayout(<Component {...pageProps}/>)} 
            </Layout>
          </AuthWrapper>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}
