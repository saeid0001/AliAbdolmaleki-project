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
        onClick={goToPage}
        className="md:w-[24%] w-[45%] mb-4 cursor-pointer group hover:scale-110 transition duration-150 ease-out relative rounded-md overflow-hidden"
      >
        <img src={image} className="" alt="" />
        <div className="group-hover:flex md:text-base text-[8px] p-1  text-center justify-center items-center flex-col absolute group-hover:top-0 group-hover:right-0 group-hover:bottom-0 transition duration-300 ease-out group-hover:bg-four group-hover:bg-opacity-80 group-hover:text-[#ccc]  group-hover:w-full">
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
