import { Anuphan,Outfit } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const anuphan = Anuphan({weight:"400",subsets:['thai']})
const outfit = Outfit({weight:"400",subsets:['latin']})

export const metadata = {
  title: "Jasda",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${anuphan.className} ${outfit.className} antialiased bg`}
      >
        <div className="min-h-screen bg-dot-pattern dark:[bg-dot-pattern]">
        <Navbar />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
