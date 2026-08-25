import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishan Shah | Insurance Product + Systems",
  description: "Insurance product management, business systems delivery, operations, and practical automation from Ishan Shah.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Ishan Shah | Insurance Product + Systems",
    description: "Insurance fluency. Product judgment. Delivery discipline.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Ishan Shah — Insurance Product + Systems" }],
  },
  twitter: { card: "summary_large_image", title: "Ishan Shah | Insurance Product + Systems", description: "Insurance fluency. Product judgment. Delivery discipline.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
