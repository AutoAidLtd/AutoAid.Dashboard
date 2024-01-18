import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import i18n from "./utils/lang/i18n.ts";
// import "./utils/errorTracking/sentry";
import "./index.css";
import {
  ReactQueryDevtools,
  ReactQueryDevtoolsPanel,
} from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import ThemeCustomization from "./themes/index.tsx";
import { FirebaseProvider } from "./base/store/context/FirebaseContext.tsx";
import { IntlProvider } from "react-intl";
import { SocketContext, socket } from "./base/store/context/SocketContext.tsx";
import { I18nextProvider } from "react-i18next";
/**
 *
 * Fix regeneratorRuntime is not defined
 */
import "regenerator-runtime";
// import Locales from "@ui/Locales.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <SocketContext.Provider value={socket}>
        <RecoilRoot>
          <QueryClientProvider client={new QueryClient()}>
            <FirebaseProvider>
              {/* <IntlProvider locale="en"> */}
              <ThemeCustomization>
                {/* <Locales> */}
                <App />
                {/* </Locales> */}
              </ThemeCustomization>
              {/* </IntlProvider> */}
            </FirebaseProvider>
          </QueryClientProvider>
        </RecoilRoot>
      </SocketContext.Provider>
    </I18nextProvider>
  </React.StrictMode>
);
