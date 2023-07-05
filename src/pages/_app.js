import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "../utils/i18n";

export const butlerMedium = localFont({
  src: "../public/Fonts/Butler_Regular.otf",
  display: "swap",
});

export const butlerRegular = localFont({
  src: "../public/Fonts/Butler_Regular.otf",
  display: "swap",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, [router]);

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

          button {
            font-family: ${butlerRegular.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}
