import "./App.css";
import Base from "./Layout/Base/Base";

// .....................Pages..................
import MainPage from "./Pages/MainPage/MainPage";
// .....................Pages..................End
function App() {
  return (
    <div className="App">
      <Base>
        <MainPage></MainPage>
      </Base>
    </div>
  );
}

export default App;
