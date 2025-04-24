import React from "react";
import "@/styles/globals.css";
import { Montserrat } from 'next/font/google';
import { type Metadata } from "next";
import {
  AnalyticsTracker,
  ErrorBoundaryClient,
  DOMInspector,
  Branding,
} from "@/utils/creatr.scripts";
import { GlobalErrorHandler } from "@/utils/global-error-handler";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Initialize Montserrat font
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Create a proper React component wrapper
const ErrorBoundaryWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const ErrorBoundaryComponent =
    ErrorBoundaryClient as unknown as React.ComponentType<any>;
  return <ErrorBoundaryComponent {...props} />;
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Litu Consulting | Company Formation in Lithuania",
    template: "%s | Litu Consulting",
  },
  description: "Litu Consulting provides specialized consultancy services for entrepreneurs and investors aiming to establish their business in Lithuania.",
  applicationName: "Litu Consulting",
  keywords: ["lithuania", "company formation", "business consulting", "investment", "turkey", "european union", "residence permit"],
  authors: [{ name: "Litu Consulting Team" }],
  creator: "Litu Consulting",
  publisher: "Litu Consulting",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Litu Consulting",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={montserrat.className}>
        <GlobalErrorHandler />
        <DOMInspector>
          <ErrorBoundaryWrapper>
            <LanguageProvider>
              {children}
              <Branding />
            </LanguageProvider>
          </ErrorBoundaryWrapper>
          <AnalyticsTracker siteKey="litu-consulting" />
        </DOMInspector>
      </body>
    </html>
  );
}
