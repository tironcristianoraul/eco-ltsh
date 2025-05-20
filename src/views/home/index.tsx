import LandingHeroSection from "./hero-section";
import { LandingPageContent, LandingPageWrapper } from "./index.styled";
// import FeatureSection from './feature-section';
// import TestimonialSection from "./testimonial-section";
import SolutionSection from "./solution-section";
import SecondHeroSection from "./second-hero-section";
// import BlogSection from "./blog-section";
import UseCasesSection from "./use-cases-section";
import FirstGetStartedBox from "./second-hero-section/get-started-box";
import BottomGetStartedCard from "../../components/bottom-get-starting-card";

const Home = () => (
  <LandingPageWrapper>
    <LandingPageContent>
      <LandingHeroSection />
      <SolutionSection />
      <SecondHeroSection />
      <FirstGetStartedBox />
      <UseCasesSection />
      <BottomGetStartedCard />
    </LandingPageContent>
  </LandingPageWrapper>
);

export default Home;
