import Footer from "../../components/footer";
import { LandingPageContent, LandingPageWrapper } from "./index.styled";
// import FeatureSection from './feature-section';
// import TestimonialSection from "./testimonial-section";
import SolutionSection from "./solution-section";
// import BlogSection from "./blog-section";

const Home = () => (
  <LandingPageWrapper>
    <LandingPageContent>
      <SolutionSection />
    </LandingPageContent>
    <Footer />
  </LandingPageWrapper>
);

export default Home;
