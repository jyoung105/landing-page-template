import type { Metadata } from "next"
import "./globals.css"
import { geist } from "@/lib/fonts"
import type React from "react"

export const metadata: Metadata = {
  title: "Nua - Automate high quality account research",
  description: "Nua analyzes your accounts & surfaces insights you'd normally spend hours uncovering.",
  keywords: [
    "account research",
    "sales automation",
    "SaaS sales",
    "lead generation",
    "pipeline generation",
  ],
  authors: [{ name: "Nua Team" }],
  openGraph: {
    title: "Nua - Automate high quality account research",
    description: "Nua analyzes your accounts & surfaces insights you'd normally spend hours uncovering.",
    url: "https://your-website-url.com", // Replace with your actual URL
    siteName: "Nua",
    images: [
      {
        url: "https://your-website-url.com/og-image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Nua - Automate high quality account research",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nua - Automate high quality account research",
    description: "Nua analyzes your accounts & surfaces insights you'd normally spend hours uncovering.",
    images: ["https://your-website-url.com/twitter-image.png"], // Replace with your Twitter image URL
    creator: "@NuaOfficial", // Replace with your Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={`font-sans ${geist.className}`}>{children}</body>
    </html>
  )
}

