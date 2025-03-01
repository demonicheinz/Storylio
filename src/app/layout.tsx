import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientWrapper from "@/components/layout/ClientWrapper";
import { navItems } from "@/data/navItems";
import { FloatingNav } from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";

const sora = localFont({
  src: [
    {
      path: "../../public/fonts/Sora-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sora-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sora-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

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
      className="${sora.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning={true}
        className="bg-black-100"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientWrapper>
            <FloatingNav navItems={navItems} />
            <main className="relative flex flex-col min-h-screen">{children}</main>
            <Footer />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
