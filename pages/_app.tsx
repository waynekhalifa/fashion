import Head from "next/head";
import { Amplify, AuthModeStrategyType, DataStore } from "aws-amplify";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { createTheme, GlobalStyles, CssBaseline } from "@mui/material";

// English Font Family
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { wrapper } from "@/store/store";
import createEmotionCache from "@/helpers/createEmotionCache";
import lightThemeOptions from "@/theme/lightThemeOptions";
import config from "@/aws-exports";
import MainLoader from "@/components/UI/MainLoader/MainLoader";

// Amplify.Logger.LOG_LEVEL = "DEBUG";
Amplify.configure({ ...config, ssr: true });
DataStore.configure({
  authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
});

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { locale } = useRouter();
  const { store, props } = wrapper.useWrappedStore(rest);
  const clientSideEmotionCache = createEmotionCache(locale!);
  const lightTheme = createTheme(lightThemeOptions(locale!));
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Fashion Template</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={lightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={{
              ".MuiSnackbar-root": {
                right: "24px !important",
                left: "24px !important",
              },
              ".MuiAccordionSummary-root .MuiAccordionSummary-content": {
                margin: "12px 8px !important",
              },
              ".MuiAccordionSummary-root .MuiAccordionSummary-content.Mui-expanded":
                {
                  margin: "12px 8px !important",
                },
              ".MuiAccordionSummary-root.Mui-expanded": {
                minHeight: "0 !important",
              },
              ".MuiAccordionSummary-root.Mui-expanded .MuiTypography-root": {
                marginLeft: "0 !important",
              },
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
