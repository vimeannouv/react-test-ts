import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Text from "./components/Text";

import { useEffect, useState, type MouseEvent } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [giveAdvice, setGiveAdvise] = useState(true);
  const [advice, setAdvice] = useState("");

  // this effect is used to give the client some inspiring quotes!
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) throw new Error("Error: " + response.status);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const displayAdvice = () => {
    fetchAdvice().then((adviceJson) => {
      const slip = adviceJson.slip;
      const advice = slip.advice;
      setAdvice(advice);
    });
  };

  displayAdvice();
  useEffect(() => {
    const testIval = setInterval(() => {
      displayAdvice();
    }, 5000); // setInterval is a schedular
    return () => {
      clearInterval(testIval);
    };
  }, [giveAdvice]); // dependency array ==> look for change in this

  return (
    <>
      {/* -- LIST GROUP SECTION -- */}
      <Text>
        Hello! Many components you see on this page use pre-built styles from{" "}
        <a href="https://getbootstrap.com/">bootstrap</a>
      </Text>
      <Text underline={true}>
        This is called a list group. Try clicking on one of the list elements.
      </Text>
      <ListGroup
        items={["Batman", "Superman", "Wonder woman"]}
        heading="Superheros"
        handleClick={(ev: MouseEvent) => {
          const target = ev.target as HTMLElement;
          target.style.color = "red";
        }}
      />

      {/* -- BUTTON FUNCTIONALITY SECTION -- */}
      <Text underline={true}>This uses states. Try clicking the button.</Text>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>This is an alert!</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Click me</Button>

      {/* -- Score Counter -- */}
      <Text underline={true}>
        This is a simple score counter. It uses states.
      </Text>
      <Button onClick={() => setScore(score + 1)}>Increment Score</Button>
      <Button onClick={() => setScore(score - 1)}>Decrement Score</Button>
      <p>score: {score}</p>

      {/* -- Inspiration Giver -- */}
      <Text underline={true}>Advice Generator</Text>
      <Text>
        Some say advices are the future's way of speaking to you.
        <br />
        Maybe you'll find something useful--maybe you won't. You can always turn
        it off.
        <br />
        <br />
        made to show the use of "useEffects", the giveAdvice function runs on an
        interval of 5s.
      </Text>

      {giveAdvice && <Text bold={true}>"{advice}"</Text>}
      <Button
        align="center"
        color={giveAdvice ? "danger" : "success"}
        onClick={() => setGiveAdvise(!giveAdvice)}>
        {giveAdvice ? "I don't want your stupid advice!" : "I want it back on!"}
      </Button>
      <footer style={{ height: "100px" }}></footer>
    </>
  );
}

export default App;
