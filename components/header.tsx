import Link from "next/link";

// const Header = () => {
// 	return (
// 		<div className="block text-center px-2.5 py-0.25">
// 			<div className="font-greatVibes text-lg text-pink-800 text-center">
// 				<Link href="/">
// 					<a className="text-black-800">Windy City Devs</a>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

const Header = () => {
	return (
		<h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
			<Link href="/">
				<a className="hover:underline">Windy City Devs</a>
			</Link>
			.
		</h2>
	);
};

export default Header;
