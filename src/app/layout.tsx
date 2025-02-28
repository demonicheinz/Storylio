import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientWrapper from "@/components/layout/ClientWrapper";
import { navItems } from "@/data/navItems";
import { FloatingNav } from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Storylio",
  description: "Portfolio website showcasing the work and projects of Heinz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased overflow-x-hidden"
      suppressHydrationWarning
    >
      <body className={`${sora.variable} ${jetbrainsMono.variable} bg-black-100 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
