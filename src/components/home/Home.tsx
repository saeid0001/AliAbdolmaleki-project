import Footer from "../main/Footer";
import Navbar from "../main/Navbar";
import AllMusic from "./allMusics/AllMusics";
import Biography from "./biography/Biography";
import Concert from "./concert/Concert";
import Header from "./header/Header";
import MusicNew from "./musicNew/MusicNew";
import NewAlbum from "./newAlbum/NewAlbum";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MusicNew />
      <NewAlbum />
      <Concert />
      <AllMusic />
      <Biography />
      <Footer />
    </>
  );
};

export default Home;
