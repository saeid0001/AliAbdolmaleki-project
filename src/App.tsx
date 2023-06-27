import { useEffect } from "react";
import { Routers } from "../Router";
import { useDispatch } from "react-redux/es/exports";
import { fetchinMusic } from "./context/musicSlice/musicSlice";
import { AppDispatch } from "./context/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchinMusic());
  }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
