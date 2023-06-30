import { useSelector } from "react-redux/es/hooks/useSelector";
import Title from "../../main/Title";
import { AllMusic, LoadingMusic } from "../../../context/musicSlice/MusicSlice";
import MusicPlayer from "../../main/MusicPlayer";

const MusicNew = () => {
  const AllMusics = useSelector(AllMusic);
  const Loading = useSelector(LoadingMusic);
  const NewMusic = AllMusics.filter((music) => music.id === AllMusics.length);

  return (
    <section className="p-8 my-12" data-aos="fade-down">
      <Title en="New Music" fa="آهنگ جدید" />
      {Loading && <div className="custom-loader"></div>}
      {!Loading &&
        NewMusic.map((music) => {
          return (
            <MusicPlayer
              key={music.id}
              music={music.music}
              optional={music.image}
              namefa={music.namefa}
              nameen={music.nameen}
            />
          );
        })}
    </section>
  );
};

export default MusicNew;
