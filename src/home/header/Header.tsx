const Header = () => {
  return (
    <section className="px-8">
      <div className="absolute top-0 right-0 -z-10 w-[100%] md:h-[100vh] h-[110vh]">
        {/* <video
          src="/src/img/4_5933730192550793375484.mp4"
          className="w-full h-full object-cover blur-sm"
          loop={true}
          autoPlay={true}
          muted={true}
        ></video> */}
        <img
          src="/src/img/294617724_3221424188146238_7316102028979524959_n.jpg"
          className="w-full h-full bg-cover blur-sm"
          alt="AliAbdolmaleki"
        />
      </div>
      <div className="md:h-[100vh] h-[110vh] w-full flex md:flex-row flex-col-reverse md:justify-around justify-center items-center">
        <div className="md:w-[45%] w-full">
          <img src="/src/img/new.png" alt="" className="drop-shadow-2xl" />
        </div>
        <div className="md:w-[45%] text-[#fff] w-full text-center md:text-left text-[60px] drop-shadow-[0px_0px_20px_#ce1111]">
          <span>Ali</span>
          <br />
          <span>Abdolmaleki</span>
        </div>

        <div
          className="absolute md:bottom-[-10px] -bottom-[73px] right-0 w-full h-48 z-20"
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
