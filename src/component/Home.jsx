import React from "react";
import HastaListe from "./HastaListe";

import { useNavigate } from "react-router-dom";
const Home = ({ hastaSon, setHastaSon ,dataDoktor,setDoktorSingle, }) => {
  // const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleHastaClick = ({ doktor, img, id }) => {
    const newDoktor = {
      id: id,
      img: img,
      doktor: doktor,
    };
   setDoktorSingle(newDoktor);
    navigate("/hasta");
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center">HOSPİTAL</h2>
        <div className="row g-1">
          {dataDoktor.map(({ id, doktor, img }) => (
            <div className="col-3 box">
              <div className="img" key={id}>
                <img
                  // className={show ? id : ""}
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
      <HastaListe hastaSon={hastaSon} setHastaSon={setHastaSon} />
  
    </div>
  );
};

export default Home;
