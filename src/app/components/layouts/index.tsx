import { PropsWithChildren, useEffect } from "react";
import Header from "components/layouts/partials/Header";
import Footer from "components/layouts/partials/Footer";

function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    if (typeof window !== "undefined") scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="w-11/12 lg:w-9/12 mx-auto grid lg:grid-cols-[400px_minmax(850px,_1fr)_100px]">
      <div className="md:sticky top-0 pt-10 z-0 w-full h-[60vh] md:h-screen flex flex-col justify-around">
        <Header />
      </div>
      <div className="lg:px-14 lg:pt-28 text-justify">
        {children}
        <div className="h-[2000px]"></div>
        <Footer />
      </div>
    </main>
  );
}

export default Layout;
