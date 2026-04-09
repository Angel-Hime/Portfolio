import { Bitcount } from "next/font/google";
import "./globals.css";
import HideHeader from "@/components/HideHeader";

const bitCount = Bitcount({
  weight: ["400"],
  fallback: ["Garamond"],
});

//! GLOBAL METADATA
export const metadata = {
  title: {
    default: "Annabel Peart - Software Developer",
    template: "Annabel Peart - Software Developer",
  },
  description:
    "A budding Software Developer with strengths in both front-end and back-end JavaScript functionality. With an end-goal focus and a client driven perspective, I strive to provide the best results that I can; allowing my passions to take me to the finish line!",
  applicationName: "Annabel Peart - Software Developer",
  keywords: ["Annabel Peart", "Software Developer"],
  authors: [{ name: "The Dumbbells & Dragon Team" }],
  creator: "Annabel Peart",
  publisher: "Annabel Peart",
  metadataBase: new URL("https://annabelpeart.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://annabelpeart.vercel.app/",
    title: "Annabel Peart - Software Developer",
    description:
      "A budding Software Developer with strengths in both front-end and back-end JavaScript functionality. With an end-goal focus and a client driven perspective, I strive to provide the best results that I can; allowing my passions to take me to the finish line! ",
    siteName: "Annabel Peart - Software Developer",
    images: [
      {
        url: "public/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Annabel Peart - Software Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "public/nes.png",
  },
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
