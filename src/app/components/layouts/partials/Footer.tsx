import { Typography } from "@material-tailwind/react";
import moment from "moment";

function Footer() {
	return (
		<footer className="flex flex-col items-center">
			<Typography variant="small" as="p">
				&copy; 2023 - {moment().year()} All rights reserved.
			</Typography>
		</footer>
	);
}

export default Footer;
