import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main style={{minHeight:"70vh"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
