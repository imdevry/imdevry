import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import "@/app/global.css"
/**
 * Pages
 */
import Error from "pages/error"
import Home from "pages/home"

type Props = {}

function App({ }: Props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App