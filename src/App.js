import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

function App() {
    return (
        <Routes>
            {ROUTES.map((_route_, index) => {
                const Element = _route_?.element;

                return (
                    <Route
                        key={_route_?.key || index}
                        path={_route_.path}
                        element={<Element />}
                    />
                );
            })}
        </Routes>
    );
}

export default App;
