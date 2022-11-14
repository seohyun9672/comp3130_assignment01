import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
    setNum(1);
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

  return (
    <div>
      <div className="container start">
        <h1> Enter your {header}</h1>
        <div className="inputcont">
          {
            num === 1 && <input type="text" value={name} onChange={updateName} />
          }
          {
            num === 2 && <input type="date" value={dob} onChange={updateDate} />
          }
        </div>
        <div className="btncont space">
          <div>
            <FontAwesomeIcon icon={faChevronLeft} color="white" />
            <button className="back" onClick={() => r.back()}>Back</button>
          </div>
          <div>
            {
              num === 1 && <button
                className="continue"
                onClick={() => r.push({
                  pathname: "/input",
                  query: "date"
                },
                  setHeader("date"),
                  setNum(num + 1)
                )}>Continue</button>
            }
            {
              num === 2 && <button
                className="continue"
                onClick={() => {
                  r.push("/result");
                  addUser();
                }}
              >
                Continue
              </button>
            }
            <FontAwesomeIcon icon={faChevronRight} color="white" />

          </div>
        </div>
      </div>
    </div>
  );
}
