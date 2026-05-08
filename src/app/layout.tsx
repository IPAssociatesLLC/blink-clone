import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blink - AI App Builder | Build Apps in Minutes with AI",
  description: "Build websites, SaaS, and mobile apps in minutes by chatting with AI. Includes database, hosting, authentication, and AI models. No coding skills required.",
  keywords: ["AI app builder", "no code app development", "AI website builder", "build apps with AI", "SaaS builder", "mobile app builder", "no coding required"],
  authors: [{ name: "Blink" }],
  icons: {
    icon: "https://blink.new/favicon-32x32.png",
  },
  openGraph: {
    title: "Blink - AI App Builder | Build Apps in Minutes",
    description: "Build websites, SaaS, and mobile apps in minutes by chatting with AI. Everything included: database, hosting, and auth.",
    url: "https://blink.new",
    siteName: "Blink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blink - AI App Builder | Build Apps in Minutes",
    description: "Build websites, SaaS, and mobile apps in minutes by chatting with AI. No coding skills required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
