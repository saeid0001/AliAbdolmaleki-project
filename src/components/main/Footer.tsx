import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-8 mt-12 md:mb-0 mb-5">
      <div className="flex flex-wrap flex-col justify-centerce items-center md:flex-row">
        <div className="md:w-[35%] w-full">
          <img
            src="../../../src/img/ali.png"
            className="md:w-[50%] m-auto"
            alt="Ali Abdolmaleki"
          />
        </div>
        <div className="md:w-[60%] w-full flex flex-col items-center justify-center">
          <ul className="flex justify-between flex-wrap">
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition-all duration-150 ease-in">
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                خانه
              </Link>
            </li>
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition-all duration-150 ease-in">
              <Link
                to={"/AllMusic"}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                آهنگ ها
              </Link>
            </li>
          </ul>
          <p>ساخته شده با عشق &copy; Saeid 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
