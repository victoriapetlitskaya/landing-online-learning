import Hero from "@/components/Hero/Hero";
import PopularCourses from "@/components/PopularCourses/PopularCourses";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen">
      <div className="w-full relative">
        <Hero />
        <PopularCourses />
      </div>
    </main>
  );
}
