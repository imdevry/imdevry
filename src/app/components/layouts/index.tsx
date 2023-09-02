import { PropsWithChildren } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout