import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishan Shah | Insurance AI Analyst",
  description: "Insurance technology analysis, systems delivery, and responsible AI thinking from Ishan Shah.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Ishan Shah | Insurance AI Analyst",
    description: "Insurance fluency. Analyst discipline. AI curiosity.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Ishan Shah — Insurance AI Analyst" }],
  },
  twitter: { card: "summary_large_image", title: "Ishan Shah | Insurance AI Analyst", description: "Insurance fluency. Analyst discipline. AI curiosity.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
