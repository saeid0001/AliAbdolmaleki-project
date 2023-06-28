import {
  AllConcert,
  LoadingConcert,
} from "../../../context/concertSlice/ConcertSlice";
import Title from "../../main/Title";
import { useSelector } from "react-redux";

const Concert = () => {
  const AllConcerts = useSelector(AllConcert);
  const Loading = useSelector(LoadingConcert);

  return (
    <section className="p-8 my-12">
      <Title en="Concert Tour" fa="برنامه کنسرت ها" />
      {Loading && <div className="custom-loader"></div>}
      {!Loading &&
        AllConcerts.map((concert, index) => {
          return (
            <div
              className={`pt-12 flex flex-col ${
                index % 2 === 0 ? "items-start" : "items-end"
              }`}
              key={concert.id}
            >
              <div
                className={`flex flex-col w-full md:w-[50%] items-center ${
                  index % 2 === 0 ? "md:items-end" : "md:items-start"
                }`}
              >
                <div className="flex justify-between items-center w-full p-[0.35rem] rounded-md border-[#fff] border-[1px]">
                  <span className="p-6 rounded-md mx-2 bg-[#fff] absolute">
                    {concert.city}
                  </span>
                  <span className="p-2 mx-2">{concert.city}</span>
                  <span className="p-2 mx-2 text-[#fff]">{concert.time}</span>
                  <a
                    href={concert.link}
                    className="p-1 px-2 mx-2 bg-one rounded-md text-[#fff] transition duration-150 ease-out hover:bg-three cursor-pointer"
                  >
                    خرید بلیط
                  </a>
                </div>
                {AllConcerts.length !== concert.id && (
                  <div
                    className={`${
                      index % 2 === 0
                        ? "md:translate-x-[-2.5rem] md:translate-y-2 translate-y-4"
                        : "md:translate-x-[2rem] md:translate-y-4 translate-y-4"
                    }`}
                  >
                    <span>
                      <svg
                        viewBox="0 0 39 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 text-two ${
                          index % 2 === 0 ? "rotate-45" : "-rotate-45"
                        }`}
                      >
                        <path
                          d="M9.96 92.03c3.946 3.092 9.307 7.14 13.43 9.493m0 0c.474.271.204-3.913.177-4.109-.581-4.301-1.625-8.535-2.764-12.848m2.586 16.957C4.44 80.457-2.175 53.037 5.481 38.907c.758-1.4 1.586-2.924 2.55-4.313m0 0c1.537-2.213 3.422-4.087 5.935-4.59 2.318-.463 5.784.17 7.94 2.607 4.027 4.553 2.166 11.094-2.429 11.22-4.037.112-9.76-4.42-11.445-9.237Zm0 0a9.684 9.684 0 0 1-.1-.305C.23 9.709 19.54-1.921 36.868 3.657"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeMiterlimit="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Concert;
