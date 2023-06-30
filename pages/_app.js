import "@/styles/globals.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const butlerMedium = localFont({
  src: "../public/Fonts/Butler-Medium.woff2",
  display: "swap",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <style jsx global>
        {`
          * {
            font-family: ${butlerMedium.style.fontFamily};
          }

          input {
            font-family: normal;
          }
        `}
      </style>
        <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}
