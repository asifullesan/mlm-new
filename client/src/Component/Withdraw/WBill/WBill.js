import React, { useRef, useState } from "react";

const ComponentName = (props) => {
  const {
    name,
    amount,
    withdrawOption,
    accountNumber,
    agentUserName
  } = props.wic;

  let total = (amount * 5) / 100;

  let totalCost = amount - total;

  let USERNAME = process.env.REACT_APP_USERNAME;
  let PASSWORD = process.env.REACT_APP_PASSWORD;
  let number = `88${accountNumber}`;
  let message = `You have successfully requested for the withdrawal  of the money. You will get your money in next 24hours. Thank You`;

  const withdrawHandler = () => {
    fetch(`http://localhost:5000/withdraw-request`, {
      method: "POST",
      body: JSON.stringify({
        name,
        amount,
        withdrawOption,
        accountNumber,
        agentUserName
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 1) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

          var raw = "";

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };

          fetch(
            `http://66.45.237.70/api.php?username=${USERNAME}&password=${PASSWORD}&number=${number}&message=${message}`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              console.log(result);
            })
            .catch((error) => console.log("error", error));
        }
      });
  };

  return (
    <div>
      <div className="w-bill">
        <div className="d-f2">
          <h6>Name:</h6>
          <h6>{name}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Number:</h6>
          <h6>{accountNumber}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Withdraw Type:</h6>
          <h6>{withdrawOption}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Agent Name:</h6>
          <h6>{agentUserName}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Amount:</h6>
          <h6>{amount}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Service Charge:</h6>
          <h6>5%</h6>
        </div>
        <div className="d-f mt-2">
          <h6>Total:</h6>
          <h6>{totalCost}</h6>
        </div>
        <div className="d-flex">
          <button className="up-b mt-3 ms-2" onClick={withdrawHandler}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
