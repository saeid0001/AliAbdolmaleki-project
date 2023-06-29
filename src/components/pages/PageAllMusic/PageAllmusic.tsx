import { useSelector } from "react-redux";
import { AllMusic } from "../../../context/musicSlice/MusicSlice";
import SubAllMusic from "../../home/allMusics/SubAllMusic";
import Navbar from "../../main/Navbar";
import Footer from "../../main/Footer";
import Title from "../../main/Title";

const PageAllmusic = () => {
  const AllMusicAli = useSelector(AllMusic);
  return (
    <>
      <Navbar />
      <section className="p-8 my-12">
        <Title fa="همه آهنگ ها" en="All Music" />
        <div className="flex pt-12 flex-wrap justify-between">
          {AllMusicAli.slice(0)
            .reverse()
            .map((music) => {
              return (
                <>
                  <SubAllMusic
                    key={music.id}
                    image={music.image}
                    namefa={music.namefa}
                    nameen={music.nameen}
                    musicBy={music.musicBy}
                    arng={music.arng}
                    songwriter={music.songwriter}
                  />
                </>
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PageAllmusic;
