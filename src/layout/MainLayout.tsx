import { Outlet } from "react-router-dom";
import MainFooter from "../components/MainFooter";
import MainHeaderNav from "../components/MainHeaderNav";

export default function MainLayout() {
  return (
    <div className="layout">
      <MainHeaderNav />
      <main className="main">
        <Outlet></Outlet>
      </main>
      <MainFooter />
    </div>
  );
}
