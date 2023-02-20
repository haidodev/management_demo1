import { BsFillAlarmFill } from "react-icons/bs";
import { NavBar } from "./NavBar";
import { SideBar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Outlet/>
    </div>
  );
}

export default App;
