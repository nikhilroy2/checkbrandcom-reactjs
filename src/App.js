import "./App.css";
import Base from "./Layout/Base/Base";
import "./Components/StyleComponent/StyleComponent.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// .....................Pages..................
import MainPage from "./Pages/MainPage/MainPage";
// .....................Pages..................End
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
