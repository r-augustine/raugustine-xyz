import "../styles/globals.css";
import { Source_Code_Pro } from "@next/font/google";
import type { AppProps } from "next/app";
import Script from "next/script";

const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0JGEJB0S51"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-0JGEJB0S51');
        `}
      </Script> */}

      <style jsx global>
        {`
          html {
            font-family: ${source_code_pro.style.fontFamily};
            scroll-behavior: smooth;
          }

          // * {
          //   outline: 1px solid red;
          // }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
