import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Heinz Portfolio",
  description: "View my collection of photos, designs, and visual works.",
  keywords: ["gallery", "photos", "designs", "portfolio", "visual works"],
  openGraph: {
    title: "Gallery - Heinz Portfolio",
    description: "View my collection of photos, designs, and visual works.",
    url: "https://heinz.dev/gallery",
    siteName: "Heinz Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Heinz Portfolio",
    description: "View my collection of photos, designs, and visual works.",
    creator: "@demonicheinz",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white mb-6">Gallery Page</h1>
        <p className="text-muted-foreground dark:text-blue-100">
          This is the Gallery page content.
        </p>
      </div>
    </main>
  );
}
