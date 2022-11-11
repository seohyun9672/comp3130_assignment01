import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState('')
  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [num, setNum] = useState(1);
  const [data, setData] = useState("name");

  const r = useRouter();
  useEffect(() => {
    fetch(`http://localhost:3001/get-names`).then(async (res) => {
      const data = await res.json()
      setNotes(data.notes);
    });
  })

  // useEffect(() => {
  //   r.push("/input");
  // }, []);

  // useEffect(() => {
  //   setNum((num) => num + 1);
  // });

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateDate = (e) => {
    setDate(e.target.value);
  }

  const addName = () => {
    // setNotes([...notes, note]);

    //sending note to backend
    fetch(`http://localhost:3001/user-name?name=${name}`).then(async (res) => console.log(await res.json()));

    //emptying the note to clear it out
    setName('')

    console.log(name);

  };

  const addDate = () => {
    // setNotes([...notes, note]);

    //sending note to backend
    fetch(`http://localhost:3001/user-date?date=${date}`).then(async (res) => console.log(await res.json()));

    //emptying the note to clear it out
    setDate('')

    console.log(date);

  };

  return (
    <div>
      <h1>Enter your {data}</h1>
      <input type={type} value={name} onChange={type === "text" ? updateName : updateDate} />
      <div>
        <button onClick={() => r.back()}>Back</button>
        {num === 1 ? <button
          onClick={
            () => {
              setType("date")
              addName()
              setNum((num) => num + 1);
              setData("date")
            }
          }
        >Continue</button> : <button
          onClick={
            () => {
              r.push('/result')
              addDate();
            }
          }
        >Continue</button>}
      </div>
    </div>
  );
};
