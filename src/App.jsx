import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
import Feedback from "./pages/Feedback";
import ReportIssue from "./pages/ReportIssue";
import UserProfile from "./features/user/UserProfile";
import Support from "./pages/Support";
import JoinUs from "./pages/JoinUs";
import ContactUs from "./pages/ContactUs";

// creating react query client
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0, // immediate background refetching
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
              <Route path="/user/:userId" element={<UserProfile />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="auth" element={<AuthForm />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="report" element={<ReportIssue />} />
              <Route path="support" element={<Support />} />
              <Route path="joinUs" element={<JoinUs />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-500)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
