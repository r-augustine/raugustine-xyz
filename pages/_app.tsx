import '../styles/globals.css'
import { Source_Code_Pro } from '@next/font/google'
import type { AppProps } from 'next/app'

const source_code_pro = Source_Code_Pro({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <style jsx global>{
    `
      html {
        font-family: ${source_code_pro.style.fontFamily}
      }
    `
  }
  </style>
  <Component {...pageProps} />
  </>
}
