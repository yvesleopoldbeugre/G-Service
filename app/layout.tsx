import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trouver votre logement rapidement",
  description:
    "Service de recherche de logement - résidences, maisons, colocations et plus. Trouvez votre logement idéal rapidement et facilement.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <meta name="description" content="Découvrez une expérience simple et rapide pour trouver tout ce que vous cherchez." />

      <meta property="og:title" content="Trouvez tout ce que vous cherchez" />
      <meta property="og:description" content="Découvrez tout ce que vous cherchez, en un seul endroit." />
      <meta property="og:image" content="https://g-service-five.vercel.app/preview.png" />
      <meta property="og:url" content="https://g-service-five.vercel.app" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Trouvez tout ce que vous cherchez" />
      <meta name="twitter:description" content="Découvrez tout ce que vous cherchez, en un seul endroit." />
      <meta name="twitter:image" content="https://g-service-five.vercel.app/images/preview.png" />

      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
