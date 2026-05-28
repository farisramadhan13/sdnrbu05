import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDN Rawa Badak Utara 05",
  description: "Website Resmi Sekolah Dasar Negeri Rawa Badak Utara 05",
  icons: {
    icon: "/image/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-grid-pattern relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          
          <footer className="glass mt-auto py-8 text-center border-t border-purple-500/20 relative z-10">
            <p className="text-sm font-medium opacity-80">
              © {new Date().getFullYear()} SDN Rawa Badak Utara 05. All rights reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
