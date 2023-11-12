import "styles/global.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Error from "pages/error";
import Home from "pages/home";
import Connect from "pages/connect";
import Experience from "pages/experience";
import Projects from "pages/projects";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Outlet />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="experience" element={<Experience />} />
					<Route path="connect" element={<Connect />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
