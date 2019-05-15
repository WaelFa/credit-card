import React from "react";
import ReactDom from "react-dom";

function Card() {
  return (
    <div className="Card">
      <h1>CREDIT CARD</h1>
      <img className="chip" src={require("./chip.png")} />
      <h3>7532 &nbsp; 8521 &nbsp; 4752 &nbsp; 3892</h3>
      <h4 className="pin">5421</h4>
      <h4 className="holder">CARD HOLDER</h4>
      <div className="Logos">
        <img src={require("./master.png")} />
        <img src={require("./VISA.png")} />
      </div>
      <div class="exp-date-wrapper">
        <div class="left-label upper-labels">VALID THRU</div>
        <div class="exp-date">
          <div class="upper-labels">MONTH/YEAR</div>
          <div class="date">
            02/22
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
