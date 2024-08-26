import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="size-full min-h-[80dvh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
