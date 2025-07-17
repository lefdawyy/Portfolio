import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jehad Lefdawi - Software Engineer Portfolio",
  description: "Software Engineer Portfolio showcasing skills, projects, and experience",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#090909" />

        {/* Fullsession Recording Code for http://fullsession.io/ */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function (m, n, t, l, x, p, o) {
                window["_fus_host"] = l;
                window["_site_id"] = p;
                window["_fus_id"] = x;
                o = n.createElement(t);
                o.type = "text/javascript";
                o.async = true;
                o.src = "https://rt-dev.fullsession.io/RTSessions-dev.js";
                y = n.getElementsByTagName(t)[0];
                y.parentNode.insertBefore(o, y);
              })(window, document, "script", "fullsession.io", 'cus_m2hlevx95dt');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
