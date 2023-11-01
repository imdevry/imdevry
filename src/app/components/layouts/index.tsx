import { PropsWithChildren } from "react";

import Header from "components/layouts/partials/Header";
import Footer from "components/layouts/partials/Footer";

function Layout({ children }: PropsWithChildren) {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	);
}

export default Layout;
