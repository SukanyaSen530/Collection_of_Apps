import QuizLayout from "./QuizLayout";
import { useState } from "react";
import "./Quiz.css";

export default function Quiz2() {
  const a = "3",
    b = "2",
    c = "1",
    d = "3",
    e = "4";
  const [selectedAns, setSelectedAns] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: ""
  });
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setSelectedAns((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !selectedAns.a ||
      !selectedAns.b ||
      !selectedAns.c ||
      !selectedAns.d ||
      !selectedAns.e
    )
      alert("Select The answers!");
    else setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 4500);
  };

  return (
    <QuizLayout title="Triangles and it's properties!">
      <div className="quiz_section">
        <label>
          a) In a right angled triangle, if one acute angle is half the other,
          then the smallest angle is:
        </label>
        <div>
          <input
            type="radio"
            name="a"
            id="a1"
            value="1"
            onChange={handleClick}
          />
          <label htmlFor="a1"> 25&deg; </label>

          <input
            type="radio"
            name="a"
            id="a2"
            value="2"
            onChange={handleClick}
          />
          <label htmlFor="a2"> 35&deg; </label>

          <input
            type="radio"
            name="a"
            id="a3"
            value="3"
            onChange={handleClick}
          />
          <label htmlFor="a3"> 30&deg; </label>

          <input
            type="radio"
            name="a"
            id="a4"
            value="4"
            onChange={handleClick}
          />
          <label htmlFor="a4"> 15&deg; </label>
        </div>

        <label>
          b) Angle-1 : 50&deg;, Angle-2 : 74&deg;, Angle-3: 56&deg;{" "}
        </label>
        <div>
          <input
            type="radio"
            name="b"
            id="b1"
            value="1"
            onChange={handleClick}
          />
          <label htmlFor="b1"> Obtuse Triangle </label>

          <input
            type="radio"
            name="b"
            value="2"
            id="b2"
            onChange={handleClick}
          />
          <label htmlFor="b2"> Acute Triangle </label>

          <input
            type="radio"
            name="b"
            value="3"
            id="b3"
            onChange={handleClick}
          />
          <label htmlFor="b3"> Right Triangle </label>

          <input
            type="radio"
            name="b"
            value="4"
            id="b4"
            onChange={handleClick}
          />
          <label htmlFor="b4"> Scalene Triangle </label>
        </div>

        <label>
          c) If one angle of a triangle is equal to the sum of other two angles,
          then the triangle is{" "}
        </label>
        <div>
          <input
            type="radio"
            name="c"
            value="1"
            id="c1"
            onChange={handleClick}
          />
          <label htmlFor="c1"> Equilateral Triangle </label>

          <input
            type="radio"
            name="c"
            value="2"
            id="c2"
            onChange={handleClick}
          />
          <label htmlFor="c2"> Obtuse Triangle </label>

          <input
            type="radio"
            name="c"
            value="3"
            id="c3"
            onChange={handleClick}
          />
          <label htmlFor="c3"> Isosceles Triangle </label>

          <input
            type="radio"
            name="c"
            value="4"
            id="c4"
            onChange={handleClick}
          />
          <label htmlFor="c4"> Acute Triangle </label>
        </div>

        <label>d) If ΔABC, is right angled at B, then : </label>
        <div>
          <input
            type="radio"
            name="d"
            value="1"
            id="d1"
            onChange={handleClick}
          />
          <label htmlFor="d1"> AB = BC </label>

          <input
            type="radio"
            name="d"
            value="2"
            id="d2"
            onChange={handleClick}
          />
          <label htmlFor="d2"> AC &lt; AB </label>

          <input
            type="radio"
            name="d"
            value="3"
            id="d3"
            onChange={handleClick}
          />
          <label htmlFor="d3"> AC &gt; AB </label>

          <input
            type="radio"
            name="d"
            value="4"
            id="d4"
            onChange={handleClick}
          />
          <label htmlFor="d4"> AB = AC </label>
        </div>

        <label>
          e) In ΔABC, ∠C = ∠A and BC = 6 cm and AC = 5 cm. Then the length of AB
          is:{" "}
        </label>
        <div>
          <input
            type="radio"
            name="e"
            value="1"
            id="e1"
            onChange={handleClick}
          />
          <label htmlFor="e1"> 2.5 cm </label>

          <input
            type="radio"
            name="e"
            value="2"
            id="e2"
            onChange={handleClick}
          />
          <label htmlFor="e2"> 3 cm </label>

          <input
            type="radio"
            name="e"
            value="3"
            id="e3"
            onChange={handleClick}
          />
          <label htmlFor="e3"> 5 cm </label>

          <input
            type="radio"
            name="e"
            value="4"
            id="e4"
            onChange={handleClick}
          />
          <label htmlFor="e4"> 6 cm </label>
        </div>

        <button onClick={handleSubmit}> Check </button>
      </div>

      <div className="result">
        {show ? (
          <>
            <p>a) {selectedAns.a ? (selectedAns.a === a ? "✔️" : "❌") : ""}</p>
            <p>b) {selectedAns.b ? (selectedAns.b === b ? "✔️" : "❌") : ""}</p>
            <p>c) {selectedAns.c ? (selectedAns.c === c ? "✔️" : "❌") : ""}</p>
            <p>d) {selectedAns.d ? (selectedAns.d === d ? "✔️" : "❌") : ""}</p>
            <p>e) {selectedAns.e ? (selectedAns.e === e ? "✔️" : "❌") : ""}</p>
          </>
        ) : null}
      </div>
    </QuizLayout>
  );
}
