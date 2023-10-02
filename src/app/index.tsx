import "@/app/styles/global.css"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"

import Error from "@/app/pages/_error"
import About from "@/app/pages/about"
import Experience from "@/app/pages/experience"
import Projects from "@/app/pages/projects"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<About />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App