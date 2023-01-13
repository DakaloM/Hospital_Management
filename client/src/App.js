import { BrowserRouter as Router, Routes, Route, Outlet, RouterProvider, createBrowserRouter, Navigate  } from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./contex/colorContex";
import "./app.scss";

function App() {
  
  const { darkMode } = useContext(DarkModeContext)
  
  const currentUser = true;

  console.log(darkMode)

  const Layout = () => {
    return (

        <div 
          className={darkMode? "theme-dark dark" : "theme-light light"}
            style={{
              display: "flex",
              padding: "0",
              margin: "0",
              justifyContent: "space-between",
              gap: "30px",
            }}
        >
          <Leftbar />
          <div style={{flex: "0.75"}}>
              <Navbar />
              <Outlet />
          </div>
        </div>
      
    )
  }

  const ProtectedRoutes = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: 
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>,

        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/profile",
            element: <Profile />
          }
        ]
    },
    
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
