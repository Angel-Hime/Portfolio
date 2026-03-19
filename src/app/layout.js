import { Bitcount } from "next/font/google";
import "./globals.css";
import HideHeader from "@/components/HideHeader";

const bitCount = Bitcount({
  weight: ["400"],
  fallback: ["Garamond"],
});

export const metadata = {
  title: "Annabel Peart - Portfolio",
  description: "Software Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitCount.className} antialiased`}>
        <HideHeader />
        {children}
      </body>
    </html>
  );
}
