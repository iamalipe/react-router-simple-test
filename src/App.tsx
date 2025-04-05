import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  LoaderFunctionArgs,
} from "react-router";
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";
import { demoData } from "./demoData";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Layout = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

async function loader({ params }: LoaderFunctionArgs) {
  await sleep(2000);
  const findData = demoData.find((e) => e.id === Number(params.id));
  // if(!findData) throw new Response("Not Found", { status: 404 });
  if (!findData) throw new Error("Not Found");

  return { data: findData };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <SingleMovie />,
        errorElement: <div>Something went wrong</div>,
        loader: loader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
