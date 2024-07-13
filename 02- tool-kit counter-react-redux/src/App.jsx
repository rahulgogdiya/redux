import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Container from "./components/Container";
import Contols from "./components/Contols";
import { useSelector } from "react-redux";
import Privecy from "./components/Privecy";

function App() {
  const privecy = useSelector((store) => store.privecy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privecy ? <Privecy /> : <Display />}
            <Contols />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;