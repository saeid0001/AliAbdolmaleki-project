import Footer from "../main/Footer";
import Navbar from "../main/Navbar";
import AllMusic from "./allMusics/AllMusics";
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
      <Footer />
    </>
  );
};

export default Home;
