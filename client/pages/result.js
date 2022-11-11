import { useEffect, useRouter, useState } from "react";

export default function Result() {

  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState('')
  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [num, setNum] = useState(1);
  const [data, setData] = useState("name");

  // const r = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3001/get-names`).then(async (res) => {
      const data = await res.json()
      setNotes(data.notes);
    });
  })

  return <div>
    <h1>{name}</h1>
    <h1>You are a {signName}!</h1>
    <img src={src}></img>
    <div>{startDate} - {endDate}</div>
    <div>{description}</div>
  </div>
}