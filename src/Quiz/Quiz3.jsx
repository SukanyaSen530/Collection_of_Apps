import QuizLayout from "./QuizLayout";
import { useState, useEffect } from "react";
import { isTriangle, generateRandomAngles } from "../Helper";

export default function Quiz3() {
  const [angles, setAngles] = useState({ angle1: 1, angle2: 1, angle3: 1 });
  const [res, setRes] = useState("0");

  useEffect(() => {
    setAngles(generateRandomAngles());
  }, []);

  const handleClick = () => {
    if (angles.angle3 === "") alert("Input can't be empty!");
    else if (angles.angle3 < 0) alert("Input can't be negative!");
    else setRes(isTriangle(angles));
  };

  return (
    <QuizLayout title="Guess the 3rd angle?">
      <div className="main_section">
        <label style={{ fontSize: "14px" }}>
          What will be the third angle for Angle1 = {angles.angle1}&deg; Angle2
          = {angles.angle2}&deg; ?
        </label>

        <input
          type="number"
          min="1"
          max="180"
          id="angle3"
          value={angles.angle3}
          placeholder="Angle 3"
          onChange={(e) =>
            setAngles((prevState) => ({ ...prevState, angle3: e.target.value }))
          }
        />
        <button onClick={handleClick}>Check</button>
      </div>

      <div className="result">
        {res === "0" ? (
          <p>.</p>
        ) : res === true ? (
          <h3 style={{ color: "green" }}> These angles form a triangle. 😋</h3>
        ) : (
          <h3 style={{ color: "red" }}>
            Booo!! ☹️ :( This angles don't form a triangle, may be try some
            other angles.
          </h3>
        )}
      </div>
    </QuizLayout>
  );
}
