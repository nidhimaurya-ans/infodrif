import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Manrope } from "next/font/google";




const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "InfoDrif - Affiliate Marketing",
  description: "Affiliate marketing & partner programs demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${manrope.className} bg-[#05172e] text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
