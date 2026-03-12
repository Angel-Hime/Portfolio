import { Geist, Geist_Mono, Italianno, Lato } from "next/font/google";
import "./globals.css";
import HideHeader from "@/components/HideHeader";

const lato = Lato({
  style: ["italic"],
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Annabel Peart - Portfolio",
  description: "Software Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italianno.className} ${lato.className} antialiased`}
      >
        <HideHeader />
        {children}
      </body>
    </html>
  );
}
