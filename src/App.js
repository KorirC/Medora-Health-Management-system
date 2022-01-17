import logo from "./logo.svg";
import "./App.scss";
import { Button } from "carbon-components-react";
import PatientRegistration from "./components/registration";

function App() {
  return (
    <div className="App">
      <PatientRegistration />
      <Button>create a react app</Button>
    </div>
  );
}

export default App;
