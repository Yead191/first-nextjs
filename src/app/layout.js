import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./providers/AuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlogJs",
  description: "Blog Website using NextJs",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" data-theme="light">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <div className="h-[68px]">
            <Navbar></Navbar>
          </div>
          <div className="flex-grow">


            {children}

          </div>
          <div>
            <Footer></Footer>
          </div>
        </body>
      </html>
    </AuthProvider>

  );
}
