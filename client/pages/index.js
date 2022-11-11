import { useRouter } from "next/router"

export default function Home() {

  const r = useRouter();

  return (
    <div>
      <h1>Star Wheel</h1>
      <h2>Horoscope Calculator</h2>
      <button
        onClick={
          () => r.push("input")
        }>Begin</button>
    </div>
  )
};
