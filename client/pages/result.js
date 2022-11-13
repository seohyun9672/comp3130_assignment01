import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  const [signName, setSignName] = useState("");
  const [src, setSrc] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [description, setDescription] = useState("");

  const r = useRouter();

  
  

  // const changeSign = () => {
  //   fetch(`http://localhost:3001/get-signs?sign-name=${SignName}`)
  //     .then(async (res) => {
  //       const data = await res.json();
  //       const signArr = data.signs;
  //       var i = 0;

  //       var SignName = signArr[i].SignName;
  //       var ImgSrc = signArr[i].ImgSrc;
  //       var Description = signArr[i].Description;
  //       var DateStart = signArr[i].DateStart;
  //       var DateEnd = signArr[i].DateEnd;

  //       // maybe we can try this way? (idk if this will be working)
  //       // if ( we need a condition here where it indicates the date range) {
  //       //   // i = 1
  //       //   // so it changes index number of the signArr so it detects the index number of the sign arr info and returns the right sign info
  //       // }

  //       setSignName(SignName);
  //       setDateEnd(DateEnd);
  //       setDateStart(DateStart);
  //       setSrc(ImgSrc);
  //       setDescription(Description)
  //     });
  // };

  return (
    <div>
          <button onClick={() => {
      r.push("/")
    }}>Back to Main</button>
      <h1>{name},</h1>
      <div>
        <h1>You are a(n) {sign}!</h1>
        <img src="/"></img>
        <div></div>
        <div></div>
      </div>
    </div>

    // <h1>{name},</h1>
    // <h1>You are a {signName}!</h1>
    // <img src={src}></img>
    // <div>{dateStart} - {dateEnd}</div>
    // <div>{description}</div>
  );
};