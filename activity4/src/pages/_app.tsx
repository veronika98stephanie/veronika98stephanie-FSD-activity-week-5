import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DollarProvider } from "@/context/DollarContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DollarProvider>
      <Component {...pageProps} />
    </DollarProvider>
    
  )
}
