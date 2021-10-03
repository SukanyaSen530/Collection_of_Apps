import { useState } from "react";
import { getPalindrome } from "../Helper";

export default function PalindromeBirthday() {
  const [date, setDate] = useState("");
  const [isPalindrome, setPalindrome] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ palinDate: "", days: "" });

  const handleClick = () => {
    if (!date) alert("Input can not be empty!");
    else {
      setLoading(true);
      setTimeout(() => {
        console.log(date);
        const res = getPalindrome(date);
        if (res.isPalindrome) setPalindrome(true);
        else {
          setPalindrome(false);
          setResult({ palinDate: res.palinDate, days: res.days });
        }
        setLoading(false);
        console.log(res);
      }, 2000);
    }
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Is your Birthday a Palindrome? </h1>
      <div className="main_section">
        <label htmlFor="birth_date">Enter Your Birthday!</label>
        <input
          id="birth_date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleClick}>Check</button>
      </div>

      <div className="result">
        {loading ? (
          <img
            src="https://media0.giphy.com/media/5zoxhCaYbdVHoJkmpf/giphy.gif"
            alt="calculating"
            style={{
              height: "200px",
              margin: "1rem",
              width: "90%",
              padding: "1rem"
            }}
          />
        ) : isPalindrome ? (
          <h2 style={{ color: "green" }}> Yaay... It's Palindrome! 😃</h2>
        ) : (
          isPalindrome !== null && (
            <>
              <h2 style={{ color: "red" }}>
                Ooops! :( It isn't palindrome! 😪
              </h2>
              <h3>
                Next Palindrome Date is {result.palinDate}. You missed it by{" "}
                {result.days} days!
              </h3>
            </>
          )
        )}
      </div>
    </section>
  );
}
