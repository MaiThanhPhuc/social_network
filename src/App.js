import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import MyRoutes from "./Routes/index";
import history from "./Services/history";

function App() {
  return <MyRoutes />;
}

export default App;
