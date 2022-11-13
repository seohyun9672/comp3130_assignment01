import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [dob, setDob] = useState()
  const [name, setName] = useState('');
  const [type, setType] = useState('text');
  const [num, setNum] = useState(1);
  const [names, setNames] = useState([]);
  const [dobs, setDobs] = useState([]);
  const [header, setHeader] = useState("name")

  const r = useRouter();

  useEffect(() => {
    setType("text");
  }, []);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateDate = (e) => {
    setDob(e.target.value);
    console.log(e.target.value);
  };

  const addUsers = () => {
    setNames([...names, name]);
    setDobs([...dobs, dob]);

    fetch(`http://localhost:3001/add-user?name=${name}&dob=${dob}`)
      .then(async (res) => console.log(await res.json()))

    setName('');
    setDob('');
  };

  return (
    <div>
      <h1>Enter your {header}</h1>
      <input type={type} value={name} onChange={num === 1 ? updateName : updateDate} />
      <div>
        <button onClick={() => r.back()}>Back</button>
        {num === 1 ? <button
          onClick={
            () => {
              setHeader("date");
              setType("date");
              setNum((num) => num + 1);
            }
          }
        >Continue</button> : <button
          onClick={
            () => {
              r.push('/result');
              addUsers();
            }
          }
        >Continue</button>}
      </div>
    </div>
  );
};
