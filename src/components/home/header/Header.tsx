const Header = () => {
  return (
    <section className="px-8 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[100%] md:h-[100vh] h-[120vh]">
        <video
          src="/public/4_5933730192550793375484.mp4"
          className="w-full h-full object-cover blur-sm"
          loop={true}
          autoPlay={true}
          muted={true}
        ></video>
      </div>
      <div className="md:h-[100vh] h-[120vh] w-full flex md:flex-row flex-col-reverse md:justify-between justify-center items-center">
        <div
          className="md:w-[45%] w-full"
          data-aos="fade-up-left"
          data-aos-delay="500"
        >
          <img src="/src/img/new.png" alt="" className="drop-shadow-2xl" />
        </div>
        <div
          className="md:w-[45%] w-full"
          data-aos="fade-down-right"
          data-aos-delay="500"
        >
          <img
            src="/src/img/AA.png"
            alt=""
            className=" m-auto drop-shadow-2xl"
          />
        </div>
        <div
          className="absolute md:bottom-[-10px] sm:-bottom-[190px] -bottom-[160px] right-0 w-full h-48 z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 37%, #333 93%)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Header;
