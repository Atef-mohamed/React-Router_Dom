import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RootLayout from "../pages/Layout";
import LearnLayout from "../pages/learn/Layout";
import QuickStartPage from "../pages/learn";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installition from "../pages/learn/Installition";
import Login from "../pages/Login";
import Contribute from "../pages/Cotribute";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn}
              redirectPath="/login"
              data={userData}
            >
              <Contribute />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redirectPath="/contribute"
              data={userData}
            >
              <Login />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installition" element={<Installition />} />
      </Route>
      {/* Page not found */}
      <Route path="*" element={<PageNotFound />}/>
    </>
  )
);

export default router;
