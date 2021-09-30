import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import Test from "./test";
import Test1 from "./test2";
import ButtonComponent from "./Components/Inputfolder/Button/Button";


function App() {
  return (
    <div className="App">
      <ButtonComponent color="success" label="Hello" />
    </div>
  );
}

export default App;
