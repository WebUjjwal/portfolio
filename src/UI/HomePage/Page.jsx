import Banner from "./Banner";
import StackCards from "@/components/StackCards";
import HorizontalScroll from "./HorizontalScroll";
import RelationalFunction from "./RelationalFrontend";
import Roadmap from "@/components/RoadMap";
import Community from "@/components/Community";
import Marquee from "@/components/Marquee";

const HomePage = () => (
  <div>
    <Banner />
    <RelationalFunction />
    <HorizontalScroll />
    <StackCards />
    <Roadmap />
    <Community />
    <Marquee />
    
  </div>
);

export default HomePage;
