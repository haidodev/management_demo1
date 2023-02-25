import { NavBar } from "./NavBar";
import { SideBar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { LoginForm } from "./LoginForm";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const handleClick = () => {
    setIsLogIn(true);
  }
  return (
    <>
      {!isLogIn ? <LoginForm setLogIn={setIsLogIn} /> :
        <div className="App">
          <NavBar />
          <SideBar />
          <div className="p-4 sm:ml-64">
            <div className="overflow-x-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <Outlet />

            </div>
          </div>
        </div>}
    </>
  )
}

export default App;
