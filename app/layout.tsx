import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishan Shah | Insurance AI + Product",
  description: "Insurance technology, product management, systems delivery, and responsible AI thinking from Ishan Shah.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Ishan Shah | Insurance AI + Product",
    description: "Insurance fluency. Product judgment. AI curiosity.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Ishan Shah — Insurance AI + Product" }],
  },
  twitter: { card: "summary_large_image", title: "Ishan Shah | Insurance AI + Product", description: "Insurance fluency. Product judgment. AI curiosity.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
