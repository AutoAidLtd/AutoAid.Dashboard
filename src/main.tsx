import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./utils/lang/i18n.ts";
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
/**
 *
 * Fix regeneratorRuntime is not defined
 */
import "regenerator-runtime";
// import Locales from "@ui/Locales.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <RecoilRoot>
        <QueryClientProvider client={new QueryClient()}>
          <FirebaseProvider>
            <IntlProvider locale="en">
              <ThemeCustomization>
                {/* <Locales> */}
                	<App />
                {/* </Locales> */}
              </ThemeCustomization>
            </IntlProvider>
          </FirebaseProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </SocketContext.Provider>
  </React.StrictMode>
);
