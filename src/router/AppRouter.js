import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import HastaEkle from "../component/HastaEkle";
import data from "../helpers/hastalar";
import doktor from "../helpers/doktorlar.js";

const AppRouter = () => {
  const [dataDoktor, setDataDoktor] = useState(doktor);
  const [doktorSingle, setDoktorSingle] = useState(
    JSON.parse(localStorage.getItem("doktorSingle" || []))
  );

  const [hastaSon, setHastaSon] = useState(
    JSON.parse(localStorage.getItem("hastaSon")) || data
  );
  
  useEffect(() => {
        localStorage.setItem("doktorSingle", JSON.stringify(doktorSingle));
        JSON.parse(localStorage.getItem("doktorSingle"));
  }, [doktorSingle]);

  useEffect(() => {
    localStorage.setItem("hastaSon", JSON.stringify(hastaSon));
    JSON.parse(localStorage.getItem("hastaSon"));
  }, [hastaSon]);

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
