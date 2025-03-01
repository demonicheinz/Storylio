import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Header = () => {
  return (
    <div className="relative w-full">
      {/* Grid Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-[#030014] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-56 pb-20">
        <div className="text-center space-y-4">
          <p className="text-white text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
            Immersive Pixel Wonders
          </p>

          <TextGenerateEffect
            words="Where Innovation Meets Aesthetic Brilliance"
            highlightWords={["Aesthetic", "Brilliance"]}
            highlightClass="text-purple font-bold"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto"
          />
          {/* 
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Explore a curated collection of stunning visuals that showcase the perfect blend of
            creativity and technical excellence.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
