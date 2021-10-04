import { useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

export default function Setup({ gameActive, setGameActive, setCategory }) {
  const [generalVariant, setGeneralVariant] = useState("primary");
  const [adultVariant, setAdultVariant] = useState("outline-danger");

  const [bgColor, setBgColor] = useState("#324067");

  const blueColor = "#324067";
  const redColor = "#750D37";
  const [leftBtnColor, setLeftBtn] = useState(blueColor);
  const [rightBtnColor, setRightBtn] = useState("white");

  function HandleGeneralClick() {
    if (generalVariant == "primary") {
      // (General is clicked) Adult is selected
      setGeneralVariant("outline-primary");
      setAdultVariant("danger");
      setBgColor(redColor);
      setLeftBtn("white");
      setRightBtn(redColor);
    } else {
      // (Adult is clicked) General is selected
      setGeneralVariant("primary");
      setAdultVariant("outline-danger");
      setBgColor(blueColor);
      setLeftBtn(blueColor);
      setRightBtn("white");
    }
  }

  function StartGame() {
    if (generalVariant == "primary") {
      setCategory("general");
    } else {
      setCategory("adult");
    }

    setGameActive(true);
  }

  return (
    <>
      <div style={{ backgroundColor: bgColor, height: "100vh" }}>
        <div className="jumbotron-box">
          <h1>Pick a category</h1>
          <div className="button-group">
            <Button
              variant={generalVariant}
              onClick={HandleGeneralClick}
              style={{ backgroundColor: leftBtnColor }}
            >
              General
            </Button>
            <Button
              variant={adultVariant}
              onClick={HandleGeneralClick}
              style={{
                backgroundColor: rightBtnColor,
              }}
            >
              Adult [18+]
            </Button>
          </div>
          <Button
            className="start-button"
            variant="success"
            size="lg"
            block
            onClick={StartGame}
          >
            Start
          </Button>
        </div>
      </div>
    </>
  );
}
