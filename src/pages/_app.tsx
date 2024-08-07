import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "@/lib/chakra.config";
import { Toaster } from "@/components/ui/sonner";
import useAuthPersistence from "@/backend/auth-persistence";

export default function App({ Component, pageProps }: AppProps) {
  useAuthPersistence();

  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
      <Toaster richColors />
    </ChakraProvider>
  );
}
