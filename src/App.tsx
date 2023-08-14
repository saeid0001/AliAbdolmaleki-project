import { useEffect } from "react";
import { Routers } from "../Router";
import { useDispatch } from "react-redux/es/exports";
import { fetchinMusic } from "./context/musicSlice/MusicSlice";
import { AppDispatch } from "./context/store";
import { fetchingConcert } from "./context/concertSlice/ConcertSlice";
import { fetchingAlbum } from "./context/albumSlice/AlbumSlice";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  AOS.init();

  useEffect(() => {
    dispatch(fetchinMusic());
    dispatch(fetchingConcert());
    dispatch(fetchingAlbum());
  }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
