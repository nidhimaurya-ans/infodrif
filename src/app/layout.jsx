import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "DailyHnt - Affiliate Marketing",
  description: "Affiliate marketing & partner programs demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05172e] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

