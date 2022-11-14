import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const r = useRouter();

  const addUser = () => {
    Axios.post("http://localhost:3001/add-user", { name: name, dob: dob }).then(
      () => {
        console.log(name + dob);
      }
    );
  };

  return (
    <div>
      <div className="container start">
        <h1> Enter your Name</h1>
        <div className="inputcont">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <h1> Enter your Birthdate</h1>
        <div className="inputcont">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="btncont space">
          <div>
            <FontAwesomeIcon icon={faChevronLeft} color="white" />
            <button className="back" onClick={() => r.back()}>
              Back
            </button>
          </div>
          <div>
            <button
              className="continue"
              onClick={() => {
                r.push("/result");
                addUser();
              }}
            >
              Continue
            </button>
            <FontAwesomeIcon icon={faChevronRight} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
