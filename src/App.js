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
import CreateBrandsPack from "./Pages/CreateBrandsPack/CreateBrandsPack";
import AllFilters from "./Pages/AllFilters/AllFilters";
import ControlPanel from "./Pages/ControlPanel/ControlPanel";
import CreateNewItem from "./Pages/CreateNewItem/CreateNewItem";
import StatsActivity from "./Pages/StatsActivity/StatsActivity";
import MyWatchList from "./Pages/MyWatchList/MyWatchList";
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
            <Route path="/create_brands_pack" element={<CreateBrandsPack />}></Route>
            <Route path="/create_new_item" element={<CreateNewItem />}></Route>
            <Route path="/all_filters" element={<AllFilters />}></Route>
            <Route path="/control_panel" element={<ControlPanel />}></Route>
            <Route path="/stats_activity" element={<StatsActivity />}></Route>
            <Route path="/my-watchlist" element={<MyWatchList />}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
