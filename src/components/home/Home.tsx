import Footer from "../main/Footer";
import Navbar from "../main/Navbar";
import AllMusic from "./allMusics/AllMusics";
import Biography from "./biography/Biography";
import Concert from "./concert/Concert";
import Header from "./header/Header";
import MusicNew from "./musicNew/MusicNew";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MusicNew />
      <Concert />
      <AllMusic />
      <Biography />
      <Footer />
    </>
  );
};

export default Home;
