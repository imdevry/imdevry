import { PropsWithChildren } from "react";
import Header from "components/layouts/partials/Header";
import Footer from "components/layouts/partials/Footer";

function Layout({ children }: PropsWithChildren) {
    return (
        <main className="w-9/12 mx-auto grid grid-cols-[350px_minmax(850px,_1fr)_100px]">
            <div className="sticky top-10 z-0 w-full h-screen">
                <Header />
                <Footer />
            </div>
            <div className="px-14 py-8 text-justify leading-7">
                {children}
            </div>
        </main>
    )
}

export default Layout