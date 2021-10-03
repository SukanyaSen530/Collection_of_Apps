import QuizLayout from "./QuizLayout";
import { useState } from "react";
import { getHypotenuse } from "../Helper";

export default function Quiz4() {
  const [legs, setLegs] = useState({ leg1: 1, leg2: 1, leg3: null });

  const checkInputs = (legs) => {
    if (legs.leg1 < 0 || legs.leg2 < 0) {
      alert("Inputs can't be negative!");
      return false;
    } else if (legs.leg1 === "" || legs.leg2 === "") {
      console.log(legs);
      alert("Inputs can't be empty!");
      return false;
    } else return true;
  };

  const handleClick = () => {
    if (checkInputs(legs)) {
      let output = getHypotenuse(legs);
      setLegs((prevState) => ({ ...prevState, leg3: output }));
    }
  };

  return (
    <QuizLayout title="Hypotenuse">
      <div className="main_section">
        <label htmlFor="angle1">Enter 1st Leg : </label>
        <input
          type="number"
          min="1"
          max="300"
          id="leg1"
          value={legs.leg1}
          onChange={(e) =>
            setLegs((prevState) => ({ ...prevState, leg1: e.target.value }))
          }
          placeholder="Angle 1"
        />
        <label htmlFor="angle2">Enter 2nd Leg : </label>
        <input
          id="leg2"
          type="number"
          min="1"
          max="300"
          name="leg2"
          value={legs.leg2}
          placeholder="Angle 2"
          onChange={(e) =>
            setLegs((prevState) => ({ ...prevState, leg2: e.target.value }))
          }
        />
        <button onClick={handleClick}>Check</button>
      </div>

      <div className="result">
        {legs.leg3 ? <h4> Hypotenuse is - {legs.leg3}</h4> : null}
      </div>
    </QuizLayout>
  );
}
