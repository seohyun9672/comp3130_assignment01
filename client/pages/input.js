import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";

export default function Home() {
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("text");
  const [num, setNum] = useState(1);
  // const [names, setNames] = useState([]);
  // const [dobs, setDobs] = useState([]);
  const [header, setHeader] = useState("name");
  const r = useRouter();

  useEffect(() => {
    setType("text");
  }, []);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateDate = (e) => {
    setDob(e.target.value);
    // console.log(e.target.value);
  };

  const addUser = () => {
    Axios.post("http://localhost:3001/add-user", { name: name, dob: dob }).then(
      () => {
        console.log("success");
      }
    );
  };
  const getName = () => {
    Axios.get("http://localhost:3001/get-name").then((response) => {
      // console.log(response);
      setName(response.data);
      console.log(response.data);
    });
  };

  // const addUsers = () => {
  //   setNames([...names, name]);
  //   setDobs([...dobs, dob]);

  //   fetch(`http://localhost:3001/add-user?name=${name}&dob=${dob}`).then(
  //     async (res) => console.log(await res.json())
  //   );

  //   setName("");
  //   setDob("");
  // };

  return (
    <div>
      <h1>Enter your {header}</h1>
      <input type="text" value={name} onChange={updateName} />
      <input type="date" value={dob} onChange={updateDate} />
      <div>
        <button onClick={() => r.back()}>Back</button>
        <button
          onClick={() => {
            r.push("/result");
            addUser();
            getName();
            // addUsers();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
