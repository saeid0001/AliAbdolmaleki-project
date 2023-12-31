import Navbar from "./Navbar";
import Footer from "./Footer";
import YourSvg from "../../../src/img/Oops! 404 Error with a broken robot-rafiki.svg";
import { NavLink } from "react-router-dom";

const Unfound = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="w-[50%] m-auto text-center">
          <img src={YourSvg} alt="Your SVG" />
          <p className="my-12 text-[#ccc] ">
            متاسفانه صفحه ای که به دنبال آن بوده اید یافت نشد !
          </p>
          <NavLink
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            to={"/"}
            className="text-two"
          >
            رفتن به صفحه اصلی{" "}
          </NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Unfound;
