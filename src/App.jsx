import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  return (
    <>
      <Home />
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:username",
    element: <User />,
  },
]);

export default App;
