import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import Home from "./ui/Home";
import Rooms from "./pages/Rooms";
import About from "./ui/About";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./ui/PageNotFound";
import AuthForm from "./pages/AuthForm";
import ProjectDetails from "./features/projects/ProjectDetails";
import RoomDetails from "./features/rooms/RoomDetails";

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
              <Route path="projects/:projectId" element={<ProjectDetails />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/:roomId" element={<RoomDetails />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="auth" element={<AuthForm />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
