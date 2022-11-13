import { useEffect, useRouter, useState } from "react";

export default function Result() {

  const [signs, setSigns] = useState([]);
  const [sign, setSign] = useState('');

  const [names, setNames] = useState([]);
  const [name, setName] = useState('');

  // const r = useRouter();

  useEffect(() => {
    // get current names from backend
    fetch('http://localhost:3001/get-name')
      .then(async (res) => {
        const data = await res.json();
        var nameArr = data.names
        let name = nameArr.slice(-1);
        setName(name)
      })
  });

  return <div>
    <h1>{name},</h1>
    {
      signs.map((data) => {
        <div>
          <h1>You are a {data.sign}!</h1>
          <img src={data.src}></img>
          <div>{data.startDate} - {data.endDate}</div>
          <div>{data.description}</div>
        </div>
      })
    }

  </div>
}