import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

import Header from "@/components/Header/Header";
import AlertTicker from "@/components/Header/Alert";
import Footer from "@/components/Footer";
import ClientWrapper from "./ClientWrapper";

import { Pacifico, Barriecito } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const barriecito = Barriecito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barriecito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barriecito.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <main className="dot-bg bg-fixed min-h-screen">
          <div className="pt-2 fixed left-0 right-0 z-99999">
            <AlertTicker />
            <Header />
          </div>

          <ClientWrapper>{children}</ClientWrapper>

          <Footer />
        </main>
      </body>
    </html>
  );
}