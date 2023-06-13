import Benefits from "@/components/Benefits/Benefits";
import Categories from "@/components/Categories/Categories";
import ExclusiveBundles from "@/components/ExclusiveBundles/ExclusiveBundles";
import Footer from "@/components/Footer/Footer";
import GiftCards from "@/components/GiftCards/GiftCards";
import Hero from "@/components/Hero/Hero";
import PopularCourses from "@/components/PopularCourses/PopularCourses";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen overflow-x-hidden">
      <div className="w-full relative">
        <Hero />
        <PopularCourses />
        <Categories />
        <Benefits />
        <GiftCards />
        <ExclusiveBundles />
        <Footer />
      </div>
    </main>
  );
}
