import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../../main/Title";
import { AllMusic, LoadingMusic } from "../../../context/musicSlice/MusicSlice";
import SubAllMusic from "./SubAllMusic";

const AllMusics = () => {
  const AllMus = useSelector(AllMusic);
  const Loading = useSelector(LoadingMusic);

  const navigation = useNavigate();

  const goToAllMusic = () => {
    navigation("AllMusic");
  };

  return (
    <section className="p-8 my-12" data-aos="fade-down">
      <Title fa="آهنگ های اخیر" en="Recent Songs" />
      {Loading && <div className="custom-loader"></div>}
      {!Loading && (
        <>
          <button
            onClick={goToAllMusic}
            className="flex justify-center items-center mt-12 py-1 px-2 rounded-md text-[#fff] bg-two hover:bg-three transition-all duration-150 ease-in"
          >
            <span className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path
                  d="M601.6 473.6c-57.6-64-57.6-140.8-57.6-249.6-179.2 70.4-134.4 262.4-140.8 326.4-44.8-38.4-57.6-128-57.6-128C294.4 448 268.8 512 268.8 563.2c0 128 108.8 236.8 243.2 236.8s243.2-102.4 243.2-236.8c0-76.8-57.6-115.2-57.6-217.6-83.2 25.6-96 89.6-96 128z"
                  fill="#FF6B6A"
                />
                <path
                  d="M505.6 537.6c83.2 32 64 121.6 64 147.2 19.2-19.2 25.6-57.6 25.6-57.6 19.2 12.8 32 38.4 32 64 0 57.6-51.2 108.8-108.8 108.8s-108.8-51.2-108.8-108.8c6.4-57.6 96-102.4 96-153.6z"
                  fill="#FFA9B1"
                />
              </svg>
            </span>
            <span className="mx-1">همه آهنگ ها</span>
          </button>
          <div className="pt-2 flex flex-wrap justify-between">
            {AllMus.slice(AllMus.length - 6)
              .reverse()
              .map((music, index) => {
                return (
                  <SubAllMusic
                    key={music.id}
                    index={index}
                    image={music.image}
                    namefa={music.namefa}
                    nameen={music.nameen}
                    musicBy={music.musicBy}
                    arng={music.arng}
                    songwriter={music.songwriter}
                  />
                );
              })}
          </div>
        </>
      )}
    </section>
  );
};

export default AllMusics;
