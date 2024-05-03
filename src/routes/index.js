import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

const ROUTES = [
    {
        path: "/",
        element: Home,
    },
];

export default ROUTES;
