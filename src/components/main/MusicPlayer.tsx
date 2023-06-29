import { useEffect, useRef, useState, useCallback } from "react";

interface MusicPlayerType {
  music: string | undefined;
  optional?: string;
  namefa?: string;
  nameen?: string;
}

const MusicPlayer = ({ music, optional, namefa, nameen }: MusicPlayerType) => {
  const [play, setPlay] = useState(false);
  const [dur, setDur] = useState("");
  const [cur, setCur] = useState("00:00");
  const [volume, setVolume] = useState(60);

  const AudioRef = useRef<HTMLAudioElement>(null);
  const RangeRef = useRef<HTMLInputElement>(null);
  const CurrentTimeRef = useRef<HTMLSpanElement>(null);
  const playAnimationRef = useRef<number>();

  const repeat = useCallback(() => {
    if (AudioRef.current && RangeRef.current && CurrentTimeRef.current) {
      const currentTime = AudioRef.current.currentTime;
      RangeRef.current.value = String(currentTime);
      RangeRef.current.style.setProperty(
        "--range-progress",
        `${(Number(RangeRef.current.value) / AudioRef.current.duration) * 100}%`
      );
      CurrentTimeRef.current.style.setProperty(
        "--currrent-time",
        `${
          0.5 |
          (Number(RangeRef.current.value) / AudioRef.current.duration) * 100 - 2
        }%`
      );
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [AudioRef, RangeRef]);

  useEffect(() => {
    play ? AudioRef.current?.play() : AudioRef.current?.pause();
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [play, playAnimationRef, repeat]);

  useEffect(() => {
    if (AudioRef.current) {
      AudioRef.current.volume = Number(volume) / 100;
    }
  }, [volume]);

  const FormatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  const getDuration = () => {
    if (AudioRef.current && RangeRef.current) {
      setDur(FormatTime(AudioRef.current.duration));
      RangeRef.current.max = String(AudioRef.current.duration);
    }
  };

  const getCurrent = () => {
    if (AudioRef.current) {
      setCur(FormatTime(AudioRef.current?.currentTime));
    }
  };

  const changeRangeAudio = () => {
    if (AudioRef.current && RangeRef.current) {
      AudioRef.current.currentTime = Number(RangeRef.current.value);
    }
  };

  const IconVolume = () => {
    if (volume === 0) {
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            className="text-two"
          >
            <g id="Media / Volume_Off_02">
              <path
                id="Vector"
                d="M10 9.18725H8.8125C8.0563 9.18725 7.6782 9.18725 7.37264 9.28819C6.77131 9.48684 6.2996 9.95855 6.10094 10.5599C6 10.8654 6 11.2435 6 11.9997C6 12.7559 6 13.134 6.10094 13.4396C6.2996 14.0409 6.77131 14.5127 7.37264 14.7113C7.6782 14.8122 8.0563 14.8122 8.8125 14.8122H10.2358C10.5165 14.8122 10.6569 14.8122 10.7866 14.8478C10.9015 14.8792 11.0098 14.931 11.1065 15.0006C11.2157 15.0791 11.3039 15.1883 11.4803 15.4066L13.1555 17.4797C14.0288 18.5604 14.4655 19.1008 14.848 19.1596C15.1792 19.2105 15.5138 19.0922 15.7394 18.8444C16 18.5583 16 17.8635 16 16.4741V14.9997M16 10.4997V6.97735C16 6.04105 16 5.57291 15.8776 5.3488C15.6329 4.90109 15.0905 4.70931 14.6188 4.90379C14.3827 5.00113 14.0885 5.36526 13.5 6.0935L12.875 6.86693M6 4.99975L20 18.9997"
                // stroke="#b53e01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
      );
    } else if (volume <= 40) {
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 6.04029C11 4.78253 9.5451 4.08327 8.56296 4.86899L4.64922 7.99998H3C1.34315 7.99998 0 9.34312 0 11V13C0 14.6568 1.34315 16 3 16H4.64922L8.56296 19.131C9.5451 19.9167 11 19.2174 11 17.9597V6.04029ZM5.89861 9.56172L9 7.0806V16.9194L5.89861 14.4382C5.54398 14.1545 5.10336 14 4.64922 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 9.99998 3 9.99998H4.64922C5.10336 9.99998 5.54398 9.84542 5.89861 9.56172ZM14.2426 7.94973C13.8521 7.55921 13.2189 7.55921 12.8284 7.94973C12.4379 8.34026 12.4379 8.97342 12.8284 9.36395C14.3905 10.926 14.3905 13.4587 12.8284 15.0208C12.4379 15.4113 12.4379 16.0445 12.8284 16.435C13.2189 16.8255 13.8521 16.8255 14.2426 16.435C16.5858 14.0919 16.5858 10.2929 14.2426 7.94973Z"
              fill="#b53e01"
            />
          </svg>
        </span>
      );
    } else if (volume <= 80) {
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 6.04029C11 4.78253 9.5451 4.08327 8.56296 4.86899L4.64922 7.99998H3C1.34315 7.99998 0 9.34312 0 11V13C0 14.6568 1.34315 16 3 16H4.64922L8.56296 19.131C9.5451 19.9167 11 19.2174 11 17.9597V6.04029ZM5.89861 9.56172L9 7.0806V16.9194L5.89861 14.4382C5.54398 14.1545 5.10336 14 4.64922 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 9.99998 3 9.99998H4.64922C5.10336 9.99998 5.54398 9.84542 5.89861 9.56172ZM17.0711 5.12124C16.6805 4.73072 16.0474 4.73072 15.6568 5.12124C15.2663 5.51177 15.2663 6.14493 15.6568 6.53545C18.781 9.65965 18.781 14.725 15.6568 17.8492C15.2663 18.2397 15.2663 18.8729 15.6568 19.2634C16.0474 19.6539 16.6805 19.6539 17.0711 19.2634C20.9763 15.3581 20.9763 9.02648 17.0711 5.12124ZM14.2426 7.94967C13.8521 7.55914 13.2189 7.55914 12.8284 7.94967C12.4379 8.34019 12.4379 8.97336 12.8284 9.36388C14.3905 10.926 14.3905 13.4586 12.8284 15.0207C12.4379 15.4113 12.4379 16.0444 12.8284 16.4349C13.2189 16.8255 13.8521 16.8255 14.2426 16.4349C16.5858 14.0918 16.5858 10.2928 14.2426 7.94967Z"
              fill="#b53e01"
            />
          </svg>
        </span>
      );
    } else if (volume <= 100) {
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.4853 2.29289C18.8758 1.90237 19.509 1.90237 19.8995 2.29289C25.3668 7.76023 25.3668 16.6245 19.8995 22.0919C19.509 22.4824 18.8758 22.4824 18.4853 22.0919C18.0948 21.7014 18.0948 21.0682 18.4853 20.6777C23.1716 15.9914 23.1716 8.3934 18.4853 3.70711C18.0948 3.31658 18.0948 2.68342 18.4853 2.29289ZM17.0711 5.12126C16.6806 4.73074 16.0474 4.73074 15.6569 5.12126C15.2664 5.51179 15.2664 6.14495 15.6569 6.53548C18.7811 9.65967 18.7811 14.725 15.6569 17.8492C15.2664 18.2397 15.2664 18.8729 15.6569 19.2634C16.0474 19.6539 16.6806 19.6539 17.0711 19.2634C20.9764 15.3582 20.9764 9.02651 17.0711 5.12126ZM14.2426 7.94975C13.8521 7.55923 13.2189 7.55923 12.8284 7.94975C12.4379 8.34028 12.4379 8.97344 12.8284 9.36397C14.3905 10.9261 14.3905 13.4587 12.8284 15.0208C12.4379 15.4113 12.4379 16.0445 12.8284 16.435C13.2189 16.8256 13.8521 16.8256 14.2426 16.435C16.5858 14.0919 16.5858 10.2929 14.2426 7.94975ZM11 6.04031C11 4.78255 9.5451 4.08329 8.56296 4.86901L4.64922 8H3C1.34315 8 0 9.34315 0 11V13C0 14.6569 1.34315 16 3 16H4.64922L8.56296 19.131C9.5451 19.9167 11 19.2174 11 17.9597V6.04031ZM5.89861 9.56174L9 7.08062V16.9194L5.89861 14.4383C5.54398 14.1546 5.10336 14 4.64922 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 10 3 10H4.64922C5.10336 10 5.54398 9.84544 5.89861 9.56174Z"
              fill="#b53e01"
            />
          </svg>
        </span>
      );
    }
  };
  return (
    <div className="pt-12">
      <audio
        src={music}
        ref={AudioRef}
        onLoadedMetadata={getDuration}
        onTimeUpdate={getCurrent}
      ></audio>
      <div className="flex justify-between items-center">
        <div className="w-[30%] flex justify-center flex-col items-center">
          <button type="button" onClick={() => setPlay((current) => !current)}>
            {!play ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.7 8.97989L4.14 17.7099C4.05 17.3799 4 17.0299 4 16.6699V7.32989C4 4.24989 7.33 2.32989 10 3.86989L14.04 6.19989L18.09 8.53989C18.31 8.66989 18.52 8.80989 18.7 8.97989Z"
                    fill="#b53e01"
                  />
                  <path
                    opacity="0.4"
                    d="M18.0907 15.4598L14.0407 17.7998L10.0007 20.1298C8.0907 21.2298 5.8407 20.5698 4.7207 18.9598L5.1407 18.7098L19.5807 10.0498C20.5807 11.8498 20.0907 14.3098 18.0907 15.4598Z"
                    fill="#b53e01"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#b53e01"
                  version="1.1"
                  id="Layer_1"
                  width="25px"
                  height="25px"
                  viewBox="0 0 70 70"
                  enableBackground="new 0 0 70 70"
                >
                  <g>
                    <g>
                      <path d="M23.583,7c2.209,0,4,1.773,4,3.963v48.074c0,2.189-1.791,3.963-4,3.963c-2.208,0-4-1.773-4-3.963V10.963    C19.583,8.773,21.375,7,23.583,7 M23.583,3c-4.411,0-8,3.572-8,7.963v48.074c0,4.391,3.589,7.963,8,7.963s8-3.572,8-7.963V10.963    C31.583,6.572,27.994,3,23.583,3L23.583,3z" />
                      <g>
                        <path d="M23.583,16.227c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3C24.583,15.779,24.135,16.227,23.583,16.227z" />
                      </g>
                      <g>
                        <path d="M23.583,35.227c-0.552,0-1-0.447-1-1v-14c0-0.553,0.448-1,1-1s1,0.447,1,1v14C24.583,34.779,24.135,35.227,23.583,35.227     z" />
                      </g>
                    </g>
                    <g>
                      <path d="M45.583,7c2.208,0,4,1.773,4,3.963v48.074c0,2.189-1.792,3.963-4,3.963c-2.209,0-4-1.773-4-3.963V10.963    C41.583,8.773,43.374,7,45.583,7 M45.583,3c-4.411,0-8,3.572-8,7.963v48.074c0,4.391,3.589,7.963,8,7.963s8-3.572,8-7.963V10.963    C53.583,6.572,49.994,3,45.583,3L45.583,3z" />
                      <g>
                        <path d="M43.583,59.227c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3C44.583,58.779,44.135,59.227,43.583,59.227z" />
                      </g>
                      <g>
                        <path d="M43.583,51.227c-0.552,0-1-0.447-1-1v-14c0-0.553,0.448-1,1-1s1,0.447,1,1v14C44.583,50.779,44.135,51.227,43.583,51.227     z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            )}
          </button>
          <p className=" text-[#ccc]">{dur}</p>
        </div>
        {optional && (
          <div className="w-[30%] ">
            <img
              src={optional}
              className="rounded-3xl w-full"
              alt={`${namefa} ${nameen}`}
            />
          </div>
        )}
        <div className="w-[30%] flex justify-evenly items-center">
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            dir="ltr"
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #a46352 ${volume}%, #ccc ${volume}%)`,
              width: "50%",
            }}
          />
          <IconVolume />
        </div>
      </div>
      <div className="relative my-8">
        <input
          type="range"
          defaultValue={0}
          ref={RangeRef}
          onChange={changeRangeAudio}
          dir="ltr"
          onClick={()=>setPlay(true)}
        />
        <span ref={CurrentTimeRef} className="current__tiem">
          {cur}
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
