import { useRouter } from "next/router";


export default function Home() {
  const r = useRouter();

  return (
    <>
      <div className="container center">
        <div className="imgcont">
          <img src="/windRose.svg" />
        </div>
        <div className="textcont center">
          <h1>Star Wheel</h1>
          <h2>Horoscope Calculator</h2>
        </div>
      </div>
      <div className="btncont center">
        <button
          className="begin"
          onClick={
            () => r.push({
              pathname: "/input",
              query: "name"
            })}>Begin</button>
      </div>
    </>
  );
}
