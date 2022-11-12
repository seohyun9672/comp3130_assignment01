import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState('')
  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [num, setNum] = useState(1);
  const [names, setNames] = useState([]);
  const [dates, setDates] = useState([]);
  const [header, setHeader] = useState("name")

  const r = useRouter();

  useEffect(() => {
    setType("text")
  }, []);

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateDate = (e) => {
    setDate(e.target.value);
  }

  const addUsers = () => {
    fetch(`http://localhost:3001/add-user?name=${name}?date=${date}`)
    .then(async (res) => console.log(await res.json()))
  }


  const addToNames = () => {
    // add single note to front end names array/state
    setNames([...names, name])

    // now send note to backend
    fetch(`http://localhost:3001/add-name?name=${name}`)
      .then(async (res) => console.log(await res.json()))

    // clear note 
    setName('')
  };

  const addToDates = () => {
    // add single note to front end names array/state
    setDates([...dates, date])
    

    // now send note to backend
    fetch(`http://localhost:3001/add-dob?dob=${date}`)
      .then(async (res) => console.log(await res.json()));

    // clear note 
    setDate('')
  }

  return (
    <div>
      <h1>Enter your {header}</h1>
      <input type={type} value={name} onChange={num === 1 ? updateName : updateDate} />
      <div>
        <button onClick={() => r.back()}>Back</button>
        {num === 1 ? <button
          onClick={
            () => {
              setHeader("date")
              setType("date")
              setNum((num) => num + 1);
              addToNames()
            }
          }
        >Continue</button> : <button
          onClick={
            () => {
              // r.push('/result')
              addToDates()
            }
          }
        >Continue</button>}
      </div>
    </div>
  );
};
