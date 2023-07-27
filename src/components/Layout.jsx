import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
