import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Result() {

  const [name, setName] = useState('');

  const [signName, setSignName] = useState("");
  const [src, setSrc] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [description, setDescription] = useState("");

  const r = useRouter();

  useEffect(() => {
    // get current names from backend
    fetch('http://localhost:3001/get-name')
      .then(async (res) => {
        const data = await res.json();
        var nameArr = data.names;
        var name = nameArr.slice(-1);
        setName(name);
      });
  });

  // this is only for the display purpose
  useEffect(() => {
    changeSign();
  }, []);

  const changeSign = () => {
    fetch(`http://localhost:3001/get-signs?sign-name=${SignName}`)
      .then(async (res) => {
        const data = await res.json();
        const signArr = data.signs;
        var i = 0;

        var SignName = signArr[i].SignName;
        var ImgSrc = signArr[i].ImgSrc;
        var Description = signArr[i].Description;
        var DateStart = signArr[i].DateStart;
        var DateEnd = signArr[i].DateEnd;

        // maybe we can try this way? (idk if this will be working)
        // if ( we need a condition here where it indicates the date range) {
        //   // i = 1
        //   // so it changes index number of the signArr so it detects the index number of the sign arr info and returns the right sign info
        // }

        setSignName(SignName);
        setDateEnd(DateEnd);
        setDateStart(DateStart);
        setSrc(ImgSrc);
        setDescription(Description)
      });
  };

  return <div>
    <button onClick={() => {
      r.push("/")
    }}>Back to Main</button>
    <h1>{name},</h1>
    <h1>You are a {signName}!</h1>
    <img src={src}></img>
    <div>{dateStart} - {dateEnd}</div>
    <div>{description}</div>
  </div>
};