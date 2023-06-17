import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/prismjs/prism.css";
import "@/styles/prismjs/prism.js";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
