import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestiomonialCards from "@/components/TestiomonialCards";
import  WhyChooseUs  from "@/components/WhyChooseUs";
import UpcomingWebniars from "@/components/UpcomingWebniars";
import Instructers from "@/components/Instructers";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
    <h1 className="text-2xl text-center mt-4"></h1>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestiomonialCards/>
    <UpcomingWebniars/>
    <Instructers/>
    <Footer/>
    </main>
    
  );
}
