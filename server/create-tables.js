const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db");

// make tables
db.run(
  `CREATE TABLE IF NOT EXISTS UserInfo (
        id int auto_increment,
        FirstName varchar(25),
        DOB DATE,
        PRIMARY KEY (id)
      )`
);
db.run(
  `CREATE TABLE IF NOT EXISTS ZodiacSigns (
        id int auto_increment,
        DateStart DATE, 
        DateEnd DATE,
        SignName varchar(25),
        ImgSrc varchar(1000),
        Description varchar(1000),
        PRIMARY KEY (id)
    )`
);

db.run(
  `INSERT INTO ZodiacSigns (SignName, DateStart, DateEnd, ImgSrc, Description)
  VALUES (
      "Aries",
      "March 21st",
      "April 19th",
      "/images/signs/aries.svg",
      "Aries are driven by a desire to prove themselves and their strength. They naturally take charge and are competitive and ambitious. Aries are spontaneous and courageous. They have a sense of adventure and love to explore. They\’re determined and bold, and are good at initiating new projects. They have high energy and can initiate quick actions. They can also be impatient, but are naturally active and don\’t like to waste time."
      ),
      (
        "Taurus",
        "April 20th",
        "May 20th",
        "/images/signs/taurus.svg",
        "Taureans are oriented around the physical world. They tend to be grounded and logical. They love routine and they\’re committed to their own comfort. They like to be in control. They\’re patient and steady, and their materialism is an extension of their pursuit of stability."
      ),
    (
      "Gemini",
      "May 21st",
      "June 21st",
      "/images/signs/gemini.svg",
      "Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved and childlike curiosity, always asking new questions. Geminis are versatile, comfortable being both introverts and extroverts. They are quick to adapt to the energy of a room. They can be the life of the party or a complete wallflower. They know how to bring dissimilar people together and make them get along."
      ),
    (
      "Cancer",
      "June 22nd",
      "July 22nd",
      "/images/signs/cancer.svg",
      "Cancers are homebodies. They like the comfort of the familiar. They don\’t like change. They are drawn to stability and routine. They like to know what is expected. They tend to be less experimental than other signs. They have an attraction to the past. They like to keep traditions alive. They like art that reminds them of a different time. They love old stories, or old art forms. Predictable environments make them feel comfortable. They like to know what\’s going to happen. They like to feel that they\’re part of a bigger plan. They don\’t like surprises."
      ),
    (
      "Leo",
      "July 23rd",
      "August 22nd",
      "/images/signs/leo.svg",
      "Leos are bold, warm, and loving. They are also the ultimate showmen. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. They have a way with words, and can speak eloquently on just about any topic, no matter how quickly they\’ve just been introduced to it."
      ),
    (
      "Virgo",
      "August 23rd",
      "September 22nd",
      "/images/signs/virgo.svg",
      "It\’s true that Virgos are very particular, but that doesn\’t necessarily mean that they keep neat spaces. Their particularities and habits don\’t necessarily line up with traditional views of cleanliness. They could live in what looks like a Tasmanian devil-style dust storm ruin, but still impose a \“no shoes in the house\” or \“no outside clothes on the bed\” rule. Maybe their house looks cluttered, but they still know where everything is. Everything has its place. Virgos prefer to exist in organized spaces, but put their service orientation over their own comfort. This can mean that a Virgo is too busy fixing the lives of those around them to put much work into providing for their own needs. They\’re rarely motivated by their own self-interest."
      ),
    (
      "Libra",
      "September 23rd",
      "October 23rd",
      "/images/signs/libra.svg",
      "Libras are difficult to really understand because they seem so contradictory on the surface. They\’re simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. This variability makes it difficult to pin down their true character. They are an entire constellation of personalities. Libras are different depending on who they're around.This is because Libras value empathy. They are receptive. They can be other people\’s mirrors. Because of this, they have strong opinions about other people, but take a long time to understand themselves."
      ),
    (
      "Scorpio",
      "October 24th",
      "November 21st",
      "/images/signs/scorpio.svg",
      "The Scorpio personality is a profound chasm of infinite complexity (or at least how they project themselves). They are difficult people to get to know. They are psychological trap doors. They socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. They prefer to be the people asking the questions. They remove your skin with their perceptive scalpel and take inventory of your pulsing viscera. They probe and push. They know the little things that make you tick. Your pressure points. The subtle ways to procure the answer they\’re seeking. They are keenly aware of power, its flows, and their position within its matrix."
      ),
      (
      "Sagittarius",
      "November 22nd",
      "December 21st",
      "/images/signs/sagittarius.svg",
      "Sagittarius is an explorer. They are both the fearless adventurer and the jaded critic. They understand that knowledge comes in two forms: the shallow, disposable kind that comes from external sources, and the kind that comes from within. Sagittarius knows that external knowledge can be easily gained while internal knowledge is exponentially deeper and more powerful. They\’re on a quest to delve into the depths of the universe inside the human mind. They don\’t do this to prove that they have all the answers, but instead because they know that the journey is the destination."
      ),
      (
        "Capricorn",
        "December 22nd",
        "January 19th",
        "/images/signs/capricorn.svg",
        "Capricorns are masters of discipline. The wringing of the hands, the constant reminders, the exacting structure, the ever-increasing goals, the tidal wave of self-criticism that lasts forever. They are the ultimate perfectionist. They can be so absorbed in their own internal monologue that it becomes impossible to get them to look away from themselves. Capricorns are often called workaholics."
      ),
      (
      "Aquarius",
      "January 20th",
      "February 18th",
      "/images/signs/aquarius.svg",
      "Aquarians are archetypical outcasts. This doesn\’t mean they\’re loners. In fact, they thrive in large groups—charming you with their peculiar senses of humor, intriguing you with fun facts about the history of disposable straws, or convincing you to join their reading group. The alienation they feel is often self-imposed—a result of their knee-jerk contrarianism, rather than a lack of social intelligence. They try to be weird. They hang grapefruit rinds from the wall and call it art, they pretend to actually like noise music, they saturate their internal monologues with SAT words."
      ),
      (
      "Pisces",
      "February 19th",
      "March 20th",
      "/images/signs/pisces.svg",
      "Describing a Pisces\’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they\’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless. They tend to dilute themselves with larger personalities to avoid having to form coherent identities. Most of the qualities usually associated with Pisces (dreaminess, emotionality, imagination) are internal processes that are difficult to observe from the outside. This is because Pisces are primarily inward-facing. They are not self-absorbed, but they are absorbed in themselves."
      )`
);

module.exports = db;
