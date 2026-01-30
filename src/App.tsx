import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Text from "./components/Text";

import { useState, type MouseEvent } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>

    {/* -- LIST GROUP SECTION -- */}
      <Text>
        Hello! Many of the styles you see on this page use pre-built styles from{" "}
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
    </>
  );
}

export default App;
