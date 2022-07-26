import { useState, useEffect } from "react";
import "./Card.css";

function Card() {
  const [advices, setAdvices] = useState([]);

  const baseURL = "https://api.adviceslip.com/advice";

  async function findAllAdvices() {
    const response = await fetch(baseURL);
    const advices = await response.json();
    setAdvices([advices.slip]);
  }
  console.log("slip", advices);

  const handlereset = () => {
    findAllAdvices();
  };

  useEffect(() => {
    findAllAdvices();
  }, []);

  return (
    <div className="container_Advices">
      {advices.map((advice, index) => (
        <div key={index} className="card_Advices">
          <h2 className="id_Advice">{`A D V I C E # ${advice.id}`}</h2>
          <p className="text_Advice">{`"${advice.advice}"`}</p>
          <img
            className="divider"
            src="./assets/images/pattern-divider-desktop.svg"
            alt="divisor"
          />
          <div className="border_Dice">
            <img
              className="dice"
              onClick={handlereset}
              src="./assets/images/icon-dice.svg"
              alt="dice"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
