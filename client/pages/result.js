import { useContext, useEffect, useRouter, useState } from "react";
import Axios from "axios";

export default function Result() {
  const [sign, setSign] = useState("");
  const [allSigns, setAllSigns] = useState("");

  // const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  // const r = useRouter();

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
      // console.log(response);
      setName(response.data);
    });
    Axios.get("http://localhost:3001/get-date").then((response) => {
      // console.log(response);
      setDob(response.data);
    });
    Axios.get("http://localhost:3001/get-signs").then((response) => {
      // console.log(response);
      setAllSigns(response.data);
    });
  });

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
    // Axios.get("http://localhost:3001/get-signs").then((response) => {
    //   setAllSigns(response);
    // });
    // let signData = allSigns.find((o) => o.SignName === sign);
  });

  return (
    <div>
      <h1>{name},</h1>
      <div>
        <h1>You are a(n) {sign}!</h1>
        <img src="/"></img>
        <div></div>
        <div></div>
      </div>
      ;
    </div>
  );
}
