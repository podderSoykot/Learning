import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hello World</Alert>
      )}
      <Button color="danger" onClick={() => setShowAlert((v) => !v)}>
        Toggle Alert
      </Button>
    </>
  );
}

export default App;
