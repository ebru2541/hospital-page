import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import HastaEkle from "../component/HastaEkle";
import data from "../helpers/hastalar";
import doktor from "../helpers/doktorlar.js";
const AppRouter = () => {
  const [dataDoktor, setDataDoktor] = useState(doktor);
  const [hastaSon, setHastaSon] = useState(data);
  const [doktorSingle, setDoktorSingle]=useState("")
 console.log(hastaSon)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setDoktorSingle={setDoktorSingle}
              setDataDoktor={setDataDoktor}
              setHastaSon={setHastaSon}
              hastaSon={hastaSon}
              dataDoktor={dataDoktor}
            />
          }
        />
        <Route
          path="hasta"
          element={
            <HastaEkle
              doktorSingle={doktorSingle}
              setDoktorSingle={setDoktorSingle}
              hastaSon={hastaSon}
              setHastaSon={setHastaSon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
