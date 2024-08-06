import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/home/Navbar";
import Footer from "./ui/home/Footer";
import NavbarTest from "./ui/home/NavbarTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs project",
  description: "basic projects with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-base-200">
      <body className={inter.className}>
        <Navbar />
        <main className=" px-8 py-20 max-w-6xl min-h-screen mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
