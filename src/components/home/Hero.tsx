import Image from "next/image";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-10 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 min-h-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] -z-10">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-muted-foreground dark:text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            highlightWords={["User", "Experiences"]}
            highlightClass="text-purple font-bold dark:text-purple"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-foreground dark:text-white"
          />

          <p className="text-center md:tracking-wider mb-4 text-muted-foreground dark:text-blue-100 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Heinz, a Web Developer based in Central Java, Indonesia.
          </p>

          <a href="/about">
            <MagicButton
              title="About Me"
              icon={
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/images/profile/avatar.jpg"
                    alt="Heinz profile picture"
                    fill
                    sizes="(max-width: 24px) 100vw, 24px"
                    className="object-cover rounded-full"
                    priority
                    placeholder="blur"
                    blurDataURL="/images/profile/avatar.svg"
                  />
                </div>
              }
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
