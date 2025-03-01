"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import { useState } from "react";

export type ImageOrientation = "portrait" | "landscape" | "square";

// Default image dimensions
const DEFAULT_DIMENSIONS = {
  portrait: {
    width: 1080,
    height: 1620, // 2:3 ratio
  },
  landscape: {
    width: 1620,
    height: 1080, // 3:2 ratio
  },
  square: {
    width: 1080,
    height: 1080, // 1:1 ratio
  },
} as const;

interface GalleryImage {
  id: string;
  url: string;
  title?: string;
  orientation: ImageOrientation;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: GalleryImage[];
}

const breakpointColumns = {
  default: 4,
  2560: 5,
  1920: 4,
  1280: 3,
  768: 2,
  640: 1,
};

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageData, setSelectedImageData] = useState<GalleryImage | null>(null);

  const getImageDimensions = (image: GalleryImage) => {
    const width = image.width || DEFAULT_DIMENSIONS[image.orientation].width;
    const height = image.height || DEFAULT_DIMENSIONS[image.orientation].height;
    return { width, height };
  };

  return (
    <>
      <div className="w-full">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-4"
          columnClassName="pl-4"
        >
          {images.map((image) => {
            const dimensions = getImageDimensions(image);
            const aspectRatio = dimensions.height / dimensions.width;

            return (
              <div
                key={image.id}
                className="mb-4 relative group cursor-pointer"
                onClick={() => {
                  setSelectedImage(image.url);
                  setSelectedImageData(image);
                }}
              >
                <div className="relative overflow-hidden rounded-lg bg-black/10">
                  <div style={{ paddingTop: `${aspectRatio * 100}%` }} />
                  <Image
                    src={image.url}
                    alt={image.title || "Gallery image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, (max-width: 1920px) 25vw, 20vw"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    priority={image.id === "1"}
                  />
                  {image.title && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-base">
                        {image.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedImageData(null);
          }}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={selectedImageData.title || "Selected image"}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              priority
            />
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => {
                setSelectedImage(null);
                setSelectedImageData(null);
              }}
            >
              ✕
            </button>
            {selectedImageData.title && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black/50 p-2 rounded-lg inline-block">
                  {selectedImageData.title}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
