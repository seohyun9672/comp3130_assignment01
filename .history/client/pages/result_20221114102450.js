import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Result() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [header, setHeader] = useState("");
  const [sign, setSign] = useState("");

  const r = useRouter();

  useEffect(() => {
    Axios.get("http://localhost:3001/get-name").then((response) => {
      console.log(response);
      setName(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/get-date").then((response) => {
      console.log(response);
      setDob(response.data);
    });
  }, []);

  useEffect(() => {
    const dateNum = dob.replaceAll("-", "");
    const monthDay = dateNum.slice(-4);
    console.log(monthDay);
    if (monthDay >= 321 && monthDay <= 419) {
      setSign("Aries");
      setHeader("You are an Aries");
    }
    if (monthDay >= 420 && monthDay <= 520) {
      setSign("Taurus");
      setHeader("You are a Taurus");
    }
    if (monthDay >= 521 && monthDay <= 621) {
      setSign("Gemini");
      setHeader("You are a Gemini");
    }
    if (monthDay >= 622 && monthDay <= 722) {
      setSign("Cancer");
      setHeader("You are a Cancer");
    }
    if (monthDay >= 723 && monthDay <= 822) {
      setSign("Leo");
      setHeader("You are a Leo");
    }
    if (monthDay >= 823 && monthDay <= 922) {
      setSign("Virgo");
      setHeader("You are a Virgo");
      setImg("/virgo.svg");
    }
    if (monthDay >= 923 && monthDay <= 1023) {
      setSign("Libra");
      setHeader("You are a Libra");
    }
    if (monthDay >= 1024 && monthDay <= 1121) {
      setSign("Scorpio");
      setHeader("You are a Scorpio");
    }
    if (monthDay >= 1122 && monthDay <= 1221) {
      setSign("Sagittarius");
      setHeader("You are a Sagittarius");
    }
    if (monthDay >= 1222 && monthDay <= 119) {
      setSign("Capricorn");
      setHeader("You are a Capricorn");
    }
    if (monthDay >= 120 && monthDay <= 218) {
      setSign("Aquarius");
      setHeader("You are an Aquarius");
    }
    if (monthDay >= 219 && monthDay <= 320) {
      setSign("Pisces");
      setHeader("You are a Pisces");
    }
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/get-sign", {
      params: { sign: sign },
    }).then((response) => {
      setDesc(response.data.Description);
      setDateStart(response.data.DateStart);
      setDateEnd(response.data.DateEnd);
      setImg(response.data.ImgSrc);
      console.log(response);
    });
  }, []);

  return (
    <div className="container start gap">
      <div className="btncont">
        <FontAwesomeIcon
          size="2x"
          color="white"
          icon={faArrowAltCircleLeft}
          className="backbtn"
          onClick={() => {
            r.push("/");
          }}
        />
      </div>
      <div className="textcont">
        <h1>{name},</h1>
        <h1>{header}!</h1>
      </div>
      <div className="imgcont center">
        <img src={img} />
      </div>
      <div className="zodiac-date">
        {dateStart} - {dateEnd}
      </div>
      <p>{desc}</p>
    </div>
  );
}
