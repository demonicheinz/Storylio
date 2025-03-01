import Hero from "@/components/home/Hero";
import { Grid } from "@/components/home/Grid";
import LastProject from "@/components/home/LastProject";
import LastBlog from "@/components/home/LastBlog";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen w-full">
      <div className="relative z-10 max-w-7xl w-full px-5 sm:px-10 py-5 sm:py-10 flex flex-col flex-grow gap-10 md:gap-16">
        <Hero />
        <Grid />
        <LastProject />
        <LastBlog />
      </div>
    </main>
  );
}
