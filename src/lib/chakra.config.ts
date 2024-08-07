import { extendTheme } from "@chakra-ui/react";
import "@fontsource/share-tech-mono";

export const chakraTheme = extendTheme({
  fonts: {
    body: "Share Tech Mono, monospace",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#181B0F",
      },
    }),
  },
});
