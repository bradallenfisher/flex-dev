import { AppProps } from "next/app"

import "@psu-flex/core-ui/assets/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
