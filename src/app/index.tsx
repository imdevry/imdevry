import "styles/global.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Error from "pages/error";
import Home from "pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
