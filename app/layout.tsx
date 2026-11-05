import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishan Shah | Project Delivery, Scrum & Technology",
  description: "Meet Ishan Shah: experience in project delivery, Scrum, and nationwide insurance technology transformation, with an aviation mindset and privacy by design.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Ishan Shah | Project Delivery, Scrum & Technology",
    description: "From discovery and requirements to testing, rollout, and adoption.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Ishan Shah — Product + Systems" }],
  },
  twitter: { card: "summary_large_image", title: "Ishan Shah | Project Delivery, Scrum & Technology", description: "From discovery and requirements to testing, rollout, and adoption.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
