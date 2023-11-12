import { PropsWithChildren } from "react";

import Header from "components/layouts/partials/Header";
import Footer from "components/layouts/partials/Footer";

function Layout({ children }: PropsWithChildren) {
	return (
		<main>
			<Header />
			<main className="my-16 lg:w-7/12 mx-auto">{children}</main>
			<Footer />
		</main>
	);
}

export default Layout;
