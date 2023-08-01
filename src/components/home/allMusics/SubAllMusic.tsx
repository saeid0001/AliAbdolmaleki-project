import { useNavigate } from "react-router-dom";

interface SubMusicType {
  image: string;
  namefa: string;
  nameen: string;
  musicBy: string;
  arng: string;
  songwriter: string;
  index?: number;
}

const SubAllMusic = ({
  image,
  namefa,
  nameen,
  musicBy,
  arng,
  songwriter,
  index,
}: SubMusicType) => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/music/${nameen}`);
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-delay={index && 500 * index}
        onClick={() => {
          goToPage();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="md:w-[24%] w-[45%] mb-4 cursor-pointer group hover:scale-110 transition-all duration-150 ease-in relative rounded-md overflow-hidden"
      >
        <img src={image} className="" alt="" />
        <div className="flex md:text-base text-xs text-center  text-[#ccc] flex-col justify-center items-center absolute bottom-0 top-0 -right-10 rotate-180 invisible opacity-0 group-hover:right-0 group-hover:visible group-hover:opacity-100 group-hover:bg-four group-hover:bg-opacity-70 group-hover:rotate-0 transition-all duration-150 ease-in w-full">
          <p>{namefa}</p>
          <p>{nameen}</p>
          {musicBy !== "" && <p>آهنگساز : {musicBy}</p>}
          {arng !== "" && <p>تنظیم کننده : {arng}</p>}
          {songwriter !== "" && <p>ترانه سرا: {songwriter}</p>}
        </div>
      </div>
    </>
  );
};

export default SubAllMusic;
