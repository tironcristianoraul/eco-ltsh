import Footer from "../../components/footer";
import LandingHeroSection from "./hero-section";
import { LandingPageContent, LandingPageWrapper } from "./index.styled";
// import FeatureSection from './feature-section';
// import TestimonialSection from "./testimonial-section";
import SolutionSection from "./solution-section";
// import BlogSection from "./blog-section";

const Home = () => (
  <LandingPageWrapper>
    <LandingPageContent>
      <LandingHeroSection />
      <SolutionSection />
    </LandingPageContent>
    <Footer />
  </LandingPageWrapper>
);

export default Home;
