import Banner from "./Banner";
import StackCards from "@/components/StackCards";
import HorizontalScroll from "./HorizontalScroll";
import RelationalFunction from "./RelationalFrontend";
import Roadmap from "@/components/RoadMap";
import Community from "@/components/Community";
import Marquee from "@/components/Marquee";
import PortfolioFaq from "@/components/PortfolioFaq";

const HomePage = () => (
  <div>
    <Banner />
    <RelationalFunction />
    <HorizontalScroll />
    <PortfolioFaq />
    <StackCards />
    <Roadmap />
    <Community />
    <Marquee />
    
  </div>
);

export default HomePage;
