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
          <input type="radio" name="a" value="1" onChange={handleClick} />
          <label> 25&deg; </label>

          <input type="radio" name="a" value="2" onChange={handleClick} />
          <label> 35&deg; </label>

          <input type="radio" name="a" value="3" onChange={handleClick} />
          <label> 30&deg; </label>

          <input type="radio" name="a" value="4" onChange={handleClick} />
          <label> 15&deg; </label>
        </div>

        <label>
          b) Angle-1 : 50&deg;, Angle-2 : 74&deg;, Angle-3: 56&deg;{" "}
        </label>
        <div>
          <input type="radio" name="b" value="1" onChange={handleClick} />
          <label> Obtuse Triangle </label>

          <input type="radio" name="b" value="2" onChange={handleClick} />
          <label> Acute Triangle </label>

          <input type="radio" name="b" value="3" onChange={handleClick} />
          <label> Right Triangle </label>

          <input type="radio" name="b" value="4" onChange={handleClick} />
          <label> Scalene Triangle </label>
        </div>

        <label>
          c) If one angle of a triangle is equal to the sum of other two angles,
          then the triangle is{" "}
        </label>
        <div>
          <input type="radio" name="c" value="1" onChange={handleClick} />
          <label> Equilateral Triangle </label>

          <input type="radio" name="c" value="2" onChange={handleClick} />
          <label> Obtuse Triangle </label>

          <input type="radio" name="c" value="3" onChange={handleClick} />
          <label> Isosceles Triangle </label>

          <input type="radio" name="c" value="4" onChange={handleClick} />
          <label> Acute Triangle </label>
        </div>

        <label>d) If ΔABC, is right angled at B, then : </label>
        <div>
          <input type="radio" name="d" value="1" onChange={handleClick} />
          <label> AB = BC </label>

          <input type="radio" name="d" value="2" onChange={handleClick} />
          <label> AC &lt; AB </label>

          <input type="radio" name="d" value="3" onChange={handleClick} />
          <label> AC &gt; AB </label>

          <input type="radio" name="d" value="4" onChange={handleClick} />
          <label> AB = AC </label>
        </div>

        <label>
          e) In ΔABC, ∠C = ∠A and BC = 6 cm and AC = 5 cm. Then the length of AB
          is:{" "}
        </label>
        <div>
          <input type="radio" name="e" value="1" onChange={handleClick} />
          <label> 2.5 cm </label>

          <input type="radio" name="e" value="2" onChange={handleClick} />
          <label> 3 cm </label>

          <input type="radio" name="e" value="3" onChange={handleClick} />
          <label> 5 cm </label>

          <input type="radio" name="e" value="4" onChange={handleClick} />
          <label> 6 cm </label>
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
