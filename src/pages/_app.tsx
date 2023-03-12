import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />{" "}
    </MantineProvider>
  );
};

export default MyApp;
