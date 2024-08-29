import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[80dvh] flex flex-col items-center px-4 py-8 md:px-8 lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
