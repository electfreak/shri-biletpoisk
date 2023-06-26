import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./globals.css";

import { Roboto } from "next/font/google";
import { CartProvider } from "@/cart/context";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Билетопоиск",
  description: "Сервис покупок билетов в кино",
  viewport: {
    width: "1200",
    initialScale: 1,
    maximumScale: 1,
    "user-scalabe": "yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
