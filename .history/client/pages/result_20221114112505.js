import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Result() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [header, setHeader] = useState("");
  const [sign, setSign] = useState("");

  const r = useRouter();

  useEffect(() => {
    Axios.get("http://localhost:3001/get-name").then((response) => {
      console.log(response);
      setName(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/get-date").then((response) => {
      console.log(response);
      setDob(response.data);
    });
  }, []);

  useEffect(() => {
    const dateNum = dob.replaceAll("-", "");
    const monthDay = dateNum.slice(-4);
    console.log(monthDay);
    if (monthDay >= 321 && monthDay <= 419) {
      setSign("Aries");
      setHeader("You are an Aries");
      setImg("signs/aries.svg");
      setDesc("The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top! ")
    }
    if (monthDay >= 420 && monthDay <= 520) {
      setSign("Taurus");
      setHeader("You are a Taurus");
      setImg("signs/taurus.svg");
      setDesc("What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Taureans enjoy relaxing in serene environments surrounded by soft sounds, soothing aromas, and succulent flavors.")
    }
    if (monthDay >= 521 && monthDay <= 621) {
      setSign("Gemini");
      setHeader("You are a Gemini");
      setImg("signs/gemini.svg");
      setDesc("Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.")
    }
    if (monthDay >= 622 && monthDay <= 722) {
      setSign("Cancer");
      setHeader("You are a Cancer");
      setImg("signs/cancer.svg"); // stop
      setDesc("Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. This water sign is willing to do whatever it takes to protect itself emotionally.")
    }
    if (monthDay >= 723 && monthDay <= 822) {
      setSign("Leo");
      setHeader("You are a Leo");
      setImg("signs/leo.svg");
      setDesc("Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.")
    }
    if (monthDay >= 823 && monthDay <= 922) {
      setSign("Virgo");
      setHeader("You are a Virgo");
      setImg("signs/virgo.svg");
      setDesc("Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.")
    }
    if (monthDay >= 923 && monthDay <= 1023) {
      setSign("Libra");
      setHeader("You are a Libra");
      setImg("signs/libra.svg");
      setDesc("Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales, an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.")
    }
    if (monthDay >= 1024 && monthDay <= 1121) {
      setSign("Scorpio");
      setHeader("You are a Scorpio");
      setImg("signs/scorpio.svg");
      setDesc("Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. ")
    }
    if (monthDay >= 1122 && monthDay <= 1221) {
      setSign("Sagittarius");
      setHeader("You are a Sagittarius");
      setImg("signs/sagittarius.svg");
      setDesc("This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.")
    }
    if (monthDay >= 1222 && monthDay <= 119) {
      setSign("Capricorn");
      setHeader("You are a Capricorn");
      setImg("signs/capricorn.svg");
      setDesc("The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.")
    }
    if (monthDay >= 120 && monthDay <= 218) {
      setSign("Aquarius");
      setHeader("You are an Aquarius");
      setImg("signs/aquarius.svg");
      setDesc("Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary. Accordingly, Aquarius is the most humanitarian astrological sign.")
    }
    if (monthDay >= 219 && monthDay <= 320) {
      setSign("Pisces");
      setHeader("You are a Pisces");
      setImg("signs/pisces.svg");
      setDesc("Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.")
    }
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/get-sign", {
      params: { sign: sign },
    }).then((response) => {
      setDesc(response.data.Description);
      setDateStart(response.data.DateStart);
      setDateEnd(response.data.DateEnd);
      setImg(response.data.ImgSrc);
      console.log(response);
    });
  }, []);

  return (
    <div className="container start gap">
      <div className="btncont">
        <FontAwesomeIcon
          size="2x"
          color="white"
          icon={faArrowAltCircleLeft}
          className="backbtn"
          onClick={() => {
            r.push("/");
          }}
        />
      </div>
      <div className="textcont">
        <h1>{name},</h1>
        <h1>{header}!</h1>
      </div>
      <div className="imgcont center">
        <img src={img} />
      </div>
      <div className="zodiac-date">
        {dateStart} - {dateEnd}
      </div>
      <p>{desc}</p>
    </div>
  );
}
