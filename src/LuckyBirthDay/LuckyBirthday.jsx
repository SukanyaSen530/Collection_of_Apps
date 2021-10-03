import "./LuckyBirthday.css";
import { useState } from "react";
import { getLuckyNum } from "../Helper";

export default function LuckyBirthday() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [lucky, setLucky] = useState("0");

  const handleClick = () => {
    if (!date || !number) {
      alert("Inputs can't be empty. Negative lucky number is invalid!");
    } else if (number < 0) alert("Lucky Number can't be empty!");
    else {
      setLucky(getLuckyNum(date, number));
    }
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Is your Birthday Lucky? Find Out!</h1>
      <div className="main_section">
        <label htmlFor="birth_date">Enter Your Birthday : </label>
        <input
          id="birth_date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="lucky_num">Enter Your Lucky Number : </label>
        <input
          id="lucky_num"
          type="number"
          min="2"
          max="20"
          step="1"
          placeholder="Insert Your Lucky Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleClick}>Check</button>
      </div>

      <div className="result">
        {lucky === "0" ? (
          <h3>All The Best!</h3>
        ) : lucky === true ? (
          <>
            <h3 style={{ color: "green" }}>
              Congratulations! {number} is your LUCKY NUMBER!
            </h3>
            <img
              src="https://i.pinimg.com/originals/b2/6a/e6/b26ae6b7ace1060d381f2add3f28b9b3.gif"
              alt="lucky_gif"
            />
          </>
        ) : (
          <>
            <h3 style={{ color: "red" }}>
              Booo!! :( {number} is not your LUCKY NUMBER!
            </h3>
            <img
              src="https://thumbs.gfycat.com/BarrenHandyIndianpalmsquirrel-size_restricted.gif"
              alt="unlucky_gif"
            />
          </>
        )}
      </div>
    </section>
  );
}
