import QuizLayout from "./QuizLayout";
import { getArea } from "../Helper";
import { useState } from "react";

export default function Quiz5() {
  const [bh, setBH] = useState({ base: 1, height: 1, area: null });

  const checkInputs = (bh) => {
    if (bh.base < 0 || bh.height < 0) {
      alert("Inputs can't be negative!");
      return false;
    } else if (bh.base === "" || bh.height === "") {
      alert("Inputs can't be empty!");
      return false;
    } else return true;
  };

  const handleClick = () => {
    if (checkInputs(bh))
      setBH((prevState) => ({ ...prevState, area: getArea(bh) }));
  };

  return (
    <QuizLayout title="Area of a triangle!">
      <div className="main_section">
        <label htmlFor="base">Enter base of triangle : </label>
        <input
          type="number"
          min="1"
          id="base"
          placeholder="Base"
          value={bh.base}
          onChange={(e) =>
            setBH((prevState) => ({ ...prevState, base: e.target.value }))
          }
        />
        <label htmlFor="height">Enter height of triangle : </label>
        <input
          id="height"
          type="number"
          min="1"
          name="angle2"
          value={bh.height}
          placeholder="Height"
          onChange={(e) =>
            setBH((prevState) => ({ ...prevState, height: e.target.value }))
          }
        />
        <button onClick={handleClick}>Check</button>
      </div>

      <div className="result">
        {bh.area ? <h4> Area is - {bh.area}</h4> : null}
      </div>
    </QuizLayout>
  );
}
