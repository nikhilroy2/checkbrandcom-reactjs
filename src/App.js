import "./App.css";
import Base from "./Layout/Base/Base";
import "./Components/StyleComponent/StyleComponent.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// .....................Pages..................
import MainPage from "./Pages/MainPage/MainPage";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import CollectionAccount from "./Pages/CollectionAccount/CollectionAccount";
import ExploreDetails from "./Pages/ExploreDetails/ExploreDetails";
import AccountUserEvents from "./Pages/AccountUserEvents/AccountUserEvents";
import AssetsPage from "./Pages/AssetsPage/AssetsPage";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import CreateCollection from "./Pages/CreateCollection/CreateCollection";
import CreateBondsPack from "./Pages/CreateBondsPack/CreateBondsPack";
import CreateOptionsPack from "./Pages/CreateOptionPack/CreateOptionPack";
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
            <Route path="/explore_details" element={<ExploreDetails />}></Route>
            <Route path="/account_user_events" element={<AccountUserEvents />}></Route>
            <Route path="/assets" element={<AssetsPage />}></Route>
            <Route path="/create_account" element={<CreateAccount />}></Route>
            <Route path="/create_collection" element={<CreateCollection />}></Route>
            <Route path="/create_bonds_pack" element={<CreateBondsPack />}></Route>
            <Route path="/create_options_pack" element={<CreateOptionsPack />}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
