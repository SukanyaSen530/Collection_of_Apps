import QuizLayout from "./QuizLayout";
import { useState } from "react";
import { isTriangle } from "../Helper";

export default function Quiz1() {
  const [angles, setAngles] = useState({ angle1: 1, angle2: 1, angle3: 1 });
  const [res, setRes] = useState("0");

  const checkInputs = (angles) => {
    if (angles.angle1 < 0 || angles.angle2 < 0 || angles.angle3 < 0) {
      console.log(angles);
      alert("Angles can't be negative!");
      return false;
    } else if (
      angles.angle1 === "" ||
      angles.angle2 === "" ||
      angles.angle3 === ""
    ) {
      console.log(angles);
      alert("Inputs can't be empty!");
      return false;
    } else return true;
  };

  const handleClick = () => {
    // console.log(angles);
    if (checkInputs(angles)) setRes(isTriangle(angles));
  };

  return (
    <QuizLayout title="Is Triangle?">
      <div className="main_section">
        <label htmlFor="angle1">Enter 1st angle : </label>
        <input
          type="number"
          min="1"
          max="180"
          id="angle1"
          value={angles.angle1}
          onChange={(e) =>
            setAngles((prevState) => ({ ...prevState, angle1: e.target.value }))
          }
          placeholder="Angle 1"
        />
        <label htmlFor="angle2">Enter 2nd angle : </label>
        <input
          id="angle2"
          type="number"
          min="1"
          max="180"
          name="angle2"
          value={angles.angle2}
          placeholder="Angle 2"
          onChange={(e) =>
            setAngles((prevState) => ({ ...prevState, angle2: e.target.value }))
          }
        />
        <label htmlFor="angle3">Enter 3rd angle : </label>
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
