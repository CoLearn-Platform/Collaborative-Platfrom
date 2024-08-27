import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Projects from "./features/projects/Projects";
import Home from "./ui/Home";
import Rooms from "./features/rooms/Rooms";
import About from "./ui/About";

// creating react query client
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 1000 * 60 * 1, // 1 minutes
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
