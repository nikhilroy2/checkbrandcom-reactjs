import "./App.css";
import Base from "./Layout/Base/Base";
import "./Components/StyleComponent/StyleComponent.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// .....................Pages..................
import MainPage from "./Pages/MainPage/MainPage";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import CollectionAccount from "./Pages/CollectionAccount/CollectionAccount";
// .....................Pages..................End
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/explore" element={<ExplorePage />}></Route>
            <Route path="/collection" element={<CollectionAccount />}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
