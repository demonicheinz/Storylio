import { Gallery } from "@/components/gallery/Gallery";
import type { ImageOrientation } from "@/components/gallery/Gallery";
import type { Metadata } from "next";
import Header from "@/components/gallery/Header";

export const metadata: Metadata = {
  title: "Gallery | Storylio",
  description: "A collection of stunning visuals and creative works",
};

// This is temporary sample data. In a real application, you would fetch this from Supabase
const sampleImages = [
  {
    id: "1",
    url: "/images/gallery/1.png",
    title: "Northern Lights in Iceland",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "2",
    url: "/images/gallery/2.png",
    title: "Aurora Borealis over Mountains",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "3",
    url: "/images/gallery/1.png",
    title: "Arctic Night Sky",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "4",
    url: "/images/gallery/2.png",
    title: "Volcanic Eruption",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "5",
    url: "/images/gallery/2.png",
    title: "Mountain Waterfall",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "6",
    url: "/images/gallery/1.png",
    title: "Northern Lights Display",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "7",
    url: "/images/gallery/1.png",
    title: "Northern Lights in Iceland",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "8",
    url: "/images/gallery/2.png",
    title: "Aurora Borealis over Mountains",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "9",
    url: "/images/gallery/1.png",
    title: "Arctic Night Sky",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "10",
    url: "/images/gallery/2.png",
    title: "Volcanic Eruption",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "11",
    url: "/images/gallery/2.png",
    title: "Mountain Waterfall",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "12",
    url: "/images/gallery/1.png",
    title: "Northern Lights Display",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "13",
    url: "/images/gallery/2.png",
    title: "Northern Lights in Iceland",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "14",
    url: "/images/gallery/1.png",
    title: "Aurora Borealis over Mountains",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "15",
    url: "/images/gallery/1.png",
    title: "Arctic Night Sky",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "16",
    url: "/images/gallery/1.png",
    title: "Volcanic Eruption",
    orientation: "portrait" as ImageOrientation,
  },
  {
    id: "17",
    url: "/images/gallery/2.png",
    title: "Mountain Waterfall",
    orientation: "landscape" as ImageOrientation,
  },
  {
    id: "18",
    url: "/images/gallery/2.png",
    title: "Northern Lights Display",
    orientation: "landscape" as ImageOrientation,
  },
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-[#030014]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header Section */}
        <section className="w-full">
          <Header />
        </section>

        {/* Gallery Section */}
        <section className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Gallery images={sampleImages} />
        </section>
      </div>
    </main>
  );
}
