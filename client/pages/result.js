import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
export default function Result() {
  const [sign, setSign] = useState("");
  // const [allSigns, setAllSigns] = useState("");

  // const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const r = useRouter();

  // useEffect(() => {
  //   // get current names from backend
  //   fetch("http://localhost:3001/get-name").then(async (res) => {
  //     const data = await res.json();
  //     var nameArr = data.names;
  //     let name = nameArr.slice(-1);
  //     setName(name);
  //   });
  // });
  useEffect(() => {
    Axios.get("http://localhost:3001/get-name").then((response) => {
      console.log(response);
      setName(response.data);
    });
    Axios.get("http://localhost:3001/get-date").then((response) => {
      // console.log(response);
      setDob(response.data);
    });
  }, []);

  const dateNum = dob.replaceAll("-", "");
  const monthDay = dateNum.slice(-4);

  useEffect(() => {
    if (monthDay >= 321 && monthDay <= 419) {
      setSign("Aries");
    }
    if (monthDay >= 420 && monthDay <= 520) {
      setSign("Taurus");
    }
    if (monthDay >= 521 && monthDay <= 621) {
      setSign("Gemini");
    }
    if (monthDay >= 622 && monthDay <= 722) {
      setSign("Cancer");
    }
    if (monthDay >= 723 && monthDay <= 822) {
      setSign("Leo");
    }
    if (monthDay >= 823 && monthDay <= 922) {
      setSign("Virgo");
    }
    if (monthDay >= 923 && monthDay <= 1023) {
      setSign("Libra");
    }
    if (monthDay >= 1024 && monthDay <= 1121) {
      setSign("Scorpio");
    }
    if (monthDay >= 1122 && monthDay <= 1221) {
      setSign("Sagittarius");
    }
    if (monthDay >= 1222 && monthDay <= 119) {
      setSign("Capricorn");
    }
    if (monthDay >= 120 && monthDay <= 218) {
      setSign("Aquarius");
    }
    if (monthDay >= 219 && monthDay <= 320) {
      setSign("Pisces");
    }
  });

  useEffect(() => {
    Axios.post("http://localhost:3001/get-sign", { SignName: sign }).then(
      (response) => {
        console.log(response);
        setDesc(response.data.Description);
        setDateStart(response.data.DateStart);
        setDateEnd(response.data.DateEnd);
        setImg(response.data.ImgSrc);
      }
    );
  }, []);

  return (
    <div className="container start gap">
      <div className="btncont">
        <FontAwesomeIcon
          size="2x"
          color="white"
          icon={faArrowAltCircleLeft}
          onClick={() => {
            r.push("/")
          }} />
      </div>
      <div className="textcont">
        <h1>{name}</h1>
        <h1>You are a(n) {sign}</h1>
      </div>
      <div className="imgcont center">
        <img src={img} />
      </div>
      <div className="zodiac-date"> {dateStart} - {dateEnd}</div>
      <p>{desc}</p>
    </div>
  )
};