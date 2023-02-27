import React, { useState } from "react";

const HastaEkle = ({ dataDoktor, hastaSon }) => {
  const [hastaBil, setHastaBil] = useState("");
  const [day, setDay] = useState("");
  const [tog, setTog] = useState("");
  const [hastaSonSon, setHastaSonSon] = useState(hastaSon);
  console.log("yyyyy", hastaSonSon);
  // const [has, setHas] = useState("");
  console.log(dataDoktor);
  console.log();

  const hastaAddClick = () => {
    const hastaEkle = {
      text: hastaBil,
      day: day,
      doktor: dataDoktor.doktor,
      bittiMi: tog,
    };
    hastaSon.push(hastaEkle);
    console.log("s", hastaSon);
    setHastaSonSon(hastaSon);
  };
  console.log(hastaSon);
  const handleDeleteHastaClick = (e) => {
    e.target.className === "icon" && e.target.closest(".liste-hasta").remove();
  };

  const handleDivClickk = (e) => {
    const h2 = e.target.querySelectorAll("h2");
    const h3 = e.target.getElementsByTagName("h3");

    if (tog) {
      if (e.target.className === "liste") {
        h2.forEach((item) => {
          item.style.color = "green";
          item.style.textDecoration = "none";
        });
        e.target.style.backgroundColor = "rgb(155, 119, 173)";
        h3[0].style.display = "none";
      }
    } else {
      h2.forEach((item) => {
        item.style.color = "red";
        item.style.textDecoration = "line-through";
      });
      e.target.style.backgroundColor = "rgb(163, 74, 157)";
      h3[0].style.display = "flex";
      h3[0].style.color = "red";
    }
    setTog(!tog);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 box">
          <div className="img1">
            <img
              src={dataDoktor.img}
              width="140px"
              height="140px"
              alt=""
              role="button"
            ></img>
          </div>
          <div className="name">
            <div className="name-box">{dataDoktor.doktor}</div>
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
              class="btn btn-warning mt-3 me-2"
              onClick={hastaAddClick}
            >
              <span className="text-danger">{dataDoktor.doktor}</span> için
              kayıt oluştur
            </button>
            <br></br>
            <button type="button" class="btn btn-info mt-2">
              Geri Dön
            </button>
          </div>
        </div>
        <div className="col-6 box ">
          <div>
            {hastaSonSon.map(({ text, doktor, day }) => (
              <div
                className="liste-hasta"
                role="button"
                onClick={(e) => handleDivClickk(e)}
              >
                <div className="bilgi">
                  <h2>{text}</h2>
                  <p className="text-light">{day}</p>
                  <h2>{doktor}</h2>
                </div>
                <div className="durum">
                  <h3>Hasta Tedavi Edildi.</h3>
                </div>
                <div className="icon" onClick={handleDeleteHastaClick}>
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
