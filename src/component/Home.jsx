import React, { useState } from "react";
import HastaListe from "./HastaListe";
import doktor from "../helpers/doktorlar.js";
import HastaEkle from "./HastaEkle";
import hasta from "../helpers/hastalar";
const Home = () => {
  const [show, setShow] = useState(true);
  const [dataDoktor, setDataDoktor] = useState("");
  const [hastaSon, setHastaSon] = useState("");

  const handleHastaClick = ({ e, doktor, img, id }) => {
    const newDoktor = new Object({
      id: id,
      img: img,
      doktor: doktor,
    });
    setDataDoktor(newDoktor);
    console.log(dataDoktor);
    e.target.closest(".row").style.display = "none";
    setShow(!show);

    const hastaSon = hasta.filter((item) => item.doktor === newDoktor.doktor);

    setHastaSon(hastaSon)
  };

  return (
    <div>
      <div className="container">
        {show && <h2 className="text-center">HOSPİTAL</h2>}
        <div className="row g-1">
          {doktor.map(({ id, doktor, img }) => (
            <div className="col-3 box" key={id}>
              <div className="img">
                <img
                  className={show ? id : ""}
                  id={id}
                  src={img}
                  width="140px"
                  height="140px"
                  alt=""
                  role="button"
                  onClick={(e) => handleHastaClick({ e, doktor, img })}
                ></img>
              </div>
              <div className="name">
                <div className="name-box">{doktor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {show ? (
        <HastaListe />
      ) : (
        <HastaEkle
          dataDoktor={dataDoktor}
          setDataDoktor={setDataDoktor}
          hastaSon={hastaSon}
          setHastaSon={setHastaSon}
        />
      )}
    </div>
  );
};

export default Home;
