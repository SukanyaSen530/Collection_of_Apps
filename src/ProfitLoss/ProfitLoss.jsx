import "./ProfitLoss.css";
import { useState } from "react";
import { getProfitLoss } from "../Helper";

export default function ProfitLoss() {
  const [IP, setIP] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [CP, setCP] = useState(0);
  const [result, setResult] = useState({ type: "", amount: 0, percentage: 0 });

  let res = "";

  if (result.type === "profit") {
    res = (
      <div className="win">
        Congratulation!! Profit - {result.amount} and Profit percentage -{" "}
        {result.percentage}%
      </div>
    );
  } else if (result.type === "loss") {
    res = (
      <div className="loss">
        Oh Nooo :( Loss - {result.amount} and Loss percentage -{" "}
        {result.percentage}%
      </div>
    );
  } else if (result.type === "neutral") {
    res = <div className="neutral"> Neither Profit nor Loss!</div>;
  } else {
    res = <div>Profit or Loss on your stocks?</div>;
  }

  const handleClick = () => {
    if (IP < 0 || quantity < 0 || CP < 0) alert("Inputs can't be negative!");
    else setResult(getProfitLoss(IP, quantity, CP));
  };

  const handleReset = () => {
    setIP(0);
    setCP(0);
    setQuantity(0);
    setResult({});
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Profit or Loss on your stock? </h1>
      <div className="main_section">
        <label htmlFor="cost_price">Stock cost price : </label>
        <input
          type="number"
          min="1"
          id="cost_price"
          value={IP}
          onChange={(e) => setIP(e.target.value)}
          placeholder="Initial Price of the stock"
        />
        <label htmlFor="quantity">Quantity : </label>
        <input
          id="quantity"
          type="number"
          min="1"
          name="quantity"
          value={quantity}
          placeholder="Quantity of the stock"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="current_price">Stock current price : </label>
        <input
          type="number"
          min="1"
          id="current_price"
          value={CP}
          placeholder="Today's Price of the stock"
          onChange={(e) => setCP(e.target.value)}
        />

        <button onClick={handleClick}>Check</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="result">
        <h4>{res}</h4>
      </div>
    </section>
  );
}
