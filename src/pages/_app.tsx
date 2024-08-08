import useAuthPersistence from "@/backend/auth-persistence";
import { Toaster } from "@/components/ui/sonner";
import { chakraTheme } from "@/lib/chakra.config";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useAuthPersistence();

  return (
    <RecoilRoot>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
        <Toaster richColors />
      </ChakraProvider>
    </RecoilRoot>
  );
}
