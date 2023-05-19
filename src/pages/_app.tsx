import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.css' // core css
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
