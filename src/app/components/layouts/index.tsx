import { PropsWithChildren } from "react";
import Header from "components/layouts/partials/Header";
import Footer from "components/layouts/partials/Footer";

function Layout({ children }: PropsWithChildren) {
    return (
        <main className="bg-white w-11/12 lg:w-9/12 mx-auto grid lg:grid-cols-[350px_minmax(850px,_1fr)_100px]">
            <div className="sticky top-0 pt-10 z-0 w-full h-screen flex flex-col justify-around">
                <Header />
            </div>
            <div className="lg:px-14 lg:pt-28 text-justify">
                {children}
                <Footer />
            </div>
        </main>
    )
}

export default Layout