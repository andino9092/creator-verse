import "./index.css";
import { useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import ErrorBoundary from "./pages/ErrorBoundary";
import EditCreator from "./pages/EditCreator";

function App() {
  const routes = useRoutes([
    {
      path: "/",

      children: [
        {
          index: true,
          element: <ShowCreators />,
        },
        {
          path: "edit",
          element: <EditCreator />,
        },
        {
          path: "view/:id",
          element: <ViewCreator />,
        },

        {
          path: "add",
          element: <AddCreator />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorBoundary />,
    },
  ]);

  return (
    <div className="w-screen overflow-x-hidden min-h-screen bg-neutral-200 text-neutral-700">

      {routes}
    </div>
  );
}

export default App;
