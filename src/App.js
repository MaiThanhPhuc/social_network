import "./App.css";
import MyRoutes from "./Routes/index";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <MyRoutes />
      <ToastContainer
        pauseOnHover={false}
        position="bottom-center"
        newestOnTop={true}
        limit={3}
        style={{width: "400px", fontSize: "12px"}}
      />
    </>
  );
}

export default App;
