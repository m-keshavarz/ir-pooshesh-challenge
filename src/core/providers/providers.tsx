import theme from "@core/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Otp from "@views/otp";
import Registration from "@views/registration";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import GlobalStyles from "@mui/material/GlobalStyles";
import Layout from "@components/layout";
import Report from "@views/report";

const queryClient = new QueryClient();

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

const Providers = () => {
  return (
    <StrictMode>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            fontFeatureSettings: "'ss02'",
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route element={<Otp />} path="/" />
                  <Route element={<Registration />} path="/registration" />
                  <Route element={<Report />} path="/report" />
                </Routes>
              </Layout>
            </BrowserRouter>
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default Providers;
