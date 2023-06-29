const Footer = () => {
  return (
    <footer className="p-8 my-12">
      <div className="flex flex-wrap flex-col justify-centerce items-center md:flex-row">
        <div className="md:w-[35%] w-full">
          <img
            src="../../../src/img/ali.png"
            className="md:w-[50%] m-auto"
            alt="Ali Abdolmaleki"
          />
        </div>
        <div className="md:w-[60%] w-full flex flex-col items-center justify-center">
          <ul className="flex justify-between">
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition duration-150 ease-out">
              خانه
            </li>
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition duration-150 ease-out">
              آهنگ ها
            </li>
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition duration-150 ease-out">
              برنامه کنسرت ها
            </li>
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition duration-150 ease-out">
              آلبوم ها
            </li>
            <li className="mx-2 cursor-pointer p-2 hover:bg-two rounded-md hover:text-[#fff] transition duration-150 ease-out">
              عکس ها
            </li>
          </ul>
          <p>ساخته شده با عشق &copy; Saeid 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
