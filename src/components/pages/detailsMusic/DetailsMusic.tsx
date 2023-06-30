import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AllMusic } from "../../../context/musicSlice/MusicSlice";
import MusicPlayer from "../../main/MusicPlayer";
import { Fragment } from "react";
import Navbar from "../../main/Navbar";
import Footer from "../../main/Footer";

const DetailsMusic = () => {
  const { name } = useParams();
  const AllMusicAli = useSelector(AllMusic);

  const currentMusic = AllMusicAli.filter((music) => music.nameen === name);

  return (
    <>
      <Navbar />
      {currentMusic.length !== 0 && (
        <section className="p-8 my-12">
          <div>
            {currentMusic.map((music) => {
              return (
                <Fragment key={music.id}>
                  <div className="md:w-[40%] w-full flex justify-center drop-shadow-2xl m-auto rounded-3xl overflow-hidden">
                    <img src={music.image} alt={music.nameen} />
                  </div>
                  <div className="w-[90%] m-auto">
                    <MusicPlayer key={music.id} music={music.music} />
                  </div>
                  <div className="w-[90%] m-auto text-[#ccc] flex flex-col items-center">
                    <h3 className="my-3 text-[40px] text-three">
                      {music.namefa} ( {music.nameen} )
                    </h3>
                    {music.musicBy !== "" && (
                      <span className="my-3">
                        <span className=" text-two mt-3">آهنگساز :</span>{" "}
                        {music.musicBy}
                      </span>
                    )}
                    {music.arng !== "" && (
                      <span className="my-3">
                        <span className=" text-two mt-3">تنظیم کننده :</span>{" "}
                        {music.arng}
                      </span>
                    )}
                    {music.songwriter !== "" && (
                      <span className="my-3">
                        <span className=" text-two mt-3">ترانه سرا :</span>{" "}
                        {music.songwriter}
                      </span>
                    )}
                    <span className=" text-two mt-3">متن آهنگ :</span>
                    {music.lyrics !== "" ? (
                      <p className="my-3 whitespace-pre-line text-center leading-8">
                        {music.lyrics}
                      </p>
                    ) : (
                      <p className="my-3 whitespace-pre-line text-center leading-8">
                        به زودی اضافه میشود ...
                      </p>
                    )}
                  </div>
                  <div className="flex justify-evenly md:flex-row flex-col  mt-6">
                    <a
                      href={music.music}
                      className="flex justify-between md:w-[45%] w-full md:mb-0 mb-2 bg-five items-center hover:bg-four transition duration-150 ease-out text-[#ccc] p-2 rounded-md"
                      download
                    >
                      <span>
                        دانلود آهنگ{" "}
                        <span className="text-two">{music.namefa}</span> با
                        کیفیت 125
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ccc"
                        width="20px"
                        height="20px"
                        viewBox="0 0 32 32"
                        version="1.1"
                      >
                        <title>دانلود آهنگ-{music.namefa}</title>
                        <path d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z" />
                      </svg>
                    </a>
                    <a
                      href={music.music}
                      className="flex justify-between md:w-[45%] w-full md:mb-0 mb-2 bg-five items-center hover:bg-four transition duration-150 ease-out text-[#ccc] p-2 rounded-md"
                      download
                    >
                      <span>
                        دانلود آهنگ{" "}
                        <span className="text-two">{music.namefa}</span> با
                        کیفیت 320
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ccc"
                        width="20px"
                        height="20px"
                        viewBox="0 0 32 32"
                        version="1.1"
                      >
                        <title>دانلود آهنگ-{music.namefa}</title>
                        <path d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z" />
                      </svg>
                    </a>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </section>
      )}
      {currentMusic.length === 0 && <h2>متاسفانه چنین آهنگی یافت نشد</h2>}
      <Footer />
    </>
  );
};

export default DetailsMusic;
