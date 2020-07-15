import Link from "next/link";

const Header = () => {
	return (
		<div className="block text-center px-2.5 py-0.25">
			<div className="font-greatVibes text-lg text-pink-800 text-center">
				<Link href="/">
					<a className="text-black-800">Windy City Devs</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
