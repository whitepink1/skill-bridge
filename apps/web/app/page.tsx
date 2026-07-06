import Benefits from "../components/Duplicates/Benefits";
import Courses from "../components/Duplicates/Courses";
import FAQs from "../components/Duplicates/FAQs";
import HeroSection from "../components/Duplicates/HeroSection";
import Pricing from "../components/Duplicates/Pricing";
import Testimonials from "../components/Duplicates/Testimonials";

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQs />
    </div>
  );
}
