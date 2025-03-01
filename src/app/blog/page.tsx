import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Heinz Portfolio",
  description:
    "Read my latest articles about web development, programming tips, and tech insights.",
  keywords: ["blog", "articles", "web development", "programming", "tech", "tutorials"],
  openGraph: {
    title: "Blog - Heinz Portfolio",
    description:
      "Read my latest articles about web development, programming tips, and tech insights.",
    url: "https://heinz.dev/blog",
    siteName: "Heinz Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Heinz Portfolio",
    description:
      "Read my latest articles about web development, programming tips, and tech insights.",
    creator: "@demonicheinz",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white mb-6">Blog Page</h1>
        <p className="text-muted-foreground dark:text-blue-100">This is the Blog page content.</p>
      </div>
    </main>
  );
}
