import HomePageTopSection from "./HomePageTopSection";
import "./HomePage.css";
import HomeMarket from "./HomeMarket";
import HomeChooseUs from "./HomeChooseUs";
import JoinUs from "./JoinUs";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <HomePageTopSection />
      <HomeMarket />
      <HomeChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
}

export default HomePage;
