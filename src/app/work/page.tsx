import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Heinz Portfolio",
  description: "Explore my latest projects and work experiences in web development.",
  keywords: ["work", "projects", "portfolio", "web development", "case studies"],
  openGraph: {
    title: "Work - Heinz Portfolio",
    description: "Explore my latest projects and work experiences in web development.",
    url: "https://heinz.dev/work",
    siteName: "Heinz Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work - Heinz Portfolio",
    description: "Explore my latest projects and work experiences in web development.",
    creator: "@demonicheinz",
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white mb-6">Work Page</h1>
        <p className="text-muted-foreground dark:text-blue-100">This is the Work page content.</p>
      </div>
    </main>
  );
}
