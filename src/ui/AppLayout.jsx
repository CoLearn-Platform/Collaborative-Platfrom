import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="size-full min-h-[80dvh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
