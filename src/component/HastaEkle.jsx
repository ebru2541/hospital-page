import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HastaEkle = ({ doktorSingle, hastaSon, setHastaSon }) => {
  const [day, setDay] = useState("");
  const [hastaBil, setHastaBil] = useState("");
  const navigate = useNavigate();

  const hasta=hastaSon.filter((hasta) => hasta.doktor === doktorSingle.doktor);


  const hastaAddClick = (doktor) => {
    setHastaSon([
      ...hastaSon,
      {
        id: new Date().getMilliseconds(),
        day: day,
        bittiMi: false,
        doktor: doktor,
        text: hastaBil,
      },
    ]);
  };

  const handleDeleteHastaClick = (id) => {
    const deleteLis = hastaSon.filter((del) => del.id !== id);
    setHastaSon(deleteLis);
  };

  const handleDivClickk = (id) => {
    const uptadeLis = hastaSon.map((doktor) => {
      if (doktor.id === id) {
        return {
          ...doktor,
          bittiMi: !doktor.bittiMi,
        };
      }
      return doktor;
    });

    setHastaSon(uptadeLis);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 box">
          <div className="img1">
            <img
              src={doktorSingle?.img}
              width="140px"
              height="140px"
              alt=""
              role="button"
            ></img>
          </div>
          <div className="name">
            <div className="name-box">{doktorSingle?.doktor}</div>
          </div>

          <div>
            <h6 className="m-2">Hasta Bilgileri</h6>
            <input
              type="text"
              className="w-75 "
              onChange={(e) => setHastaBil(e.target.value)}
            />
            <h6 className="m-2">Day & Time</h6>
            <input
              type="date"
              className="w-75"
              onChange={(e) => setDay(e.target.value)}
            />
            <br></br>
            <button
              type="button"
              className="btn btn-warning mt-3 me-2"
              onClick={() => hastaAddClick(doktorSingle?.doktor)}
            >
              <span className="text-danger">{doktorSingle?.doktor}</span> için
              kayıt oluştur
            </button>
            <br></br>
            <button
              type="button"
              className="btn btn-info mt-2"
              onClick={() => navigate("/")}
            >
              Geri Dön
            </button>
          </div>
        </div>
        <div className="col-6 box ">
          <div>
            {hasta?.map(({ text, doktor, day, bittiMi, id }) => (
              <div
                className="liste-hasta"
                role="button"
                onClick={() => handleDivClickk(id)}
              >
                <div className="bilgi" key={id}>
                  <h2 className={bittiMi ? "text-danger" : ""}>{text}</h2>
                  <p className="text-light">{day}</p>
                  <h2 className={bittiMi ? "text-danger" : ""}>{doktor}</h2>
                </div>
                <div className="durum">
                  <h3 className={bittiMi ? "text-danger" : ""}>
                    Hasta Tedavi Edildi.
                  </h3>
                </div>
                <div
                  className="icon"
                  onDoubleClick={() => handleDeleteHastaClick(id)}
                >
                  ❌
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HastaEkle;
