import { useEffect, useRouter, useState } from "react";

export default function Result() {

  const [signs, setSigns] = useState([]);
  const [sign, setSign] = useState('');
  const [name, setName] = useState('');
  // const r = useRouter();

  return <div>
    <h1>{name},</h1>
    <button onClick={console.log(signs)}></button>

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