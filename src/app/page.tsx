import Hero from "@/components/home/Hero";
import { Grid } from "@/components/home/Grid";
import RecentProject from "@/components/home/RecentProject";
import RecentBlog from "@/components/home/RecentBlog";
import Approach from "@/components/home/Approach";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen w-full bg-[#030014] text-white overflow-x-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* Hero Section - Full width */}
      <section className="w-full mb-32">
        <Hero />
      </section>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Grid Section with Tech Stack and Info */}
          <section className="w-full">
            <Grid />
          </section>

          {/* Recent Projects Section */}
          <section className="w-full">
            <RecentProject />
          </section>

          {/* Recent Blog Posts */}
          <section className="w-full">
            <RecentBlog />
          </section>

          {/* Approach Section */}
          <section className="w-full">
            <Approach />
          </section>

          {/* Client Testimonials */}
          <section className="w-full">
            <Clients />
          </section>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-32" />
    </main>
  );
}
