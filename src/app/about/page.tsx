import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Heinz Portfolio",
  description: "Learn more about Heinz, a Web Developer based in Central Java, Indonesia.",
  keywords: ["about", "portfolio", "web developer", "frontend", "backend", "full-stack"],
  openGraph: {
    title: "About - Heinz Portfolio",
    description: "Learn more about Heinz, a Web Developer based in Central Java, Indonesia.",
    url: "https://heinz.dev/about",
    siteName: "Heinz Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Heinz Portfolio",
    description: "Learn more about Heinz, a Web Developer based in Central Java, Indonesia.",
    creator: "@demonicheinz",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white mb-6">About Page</h1>
        <p className="text-muted-foreground dark:text-blue-100">This is the About page content.</p>
      </div>
    </main>
  );
}
