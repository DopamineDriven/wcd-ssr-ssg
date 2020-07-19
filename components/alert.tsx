import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

type Props = {
	preview?: boolean;
};

const Alert = ({ preview }: Props) => {
	const currentYear = new Date().getFullYear();
	return (
		<div
			className={cn("border-b", {
				"bg-accent-7 border-accent-7 text-white": preview,
				"bg-accent-1 border-accent-2": !preview
			})}
		>
			<Container>
				<div className="py-2 text-center text-sm">
					{preview ? (
						<>
							<a
								href={`https://github.com/DopamineDriven/${EXAMPLE_PATH}`}
								target="__blank"
							>{`© ${currentYear}`}</a>
						</>
					) : (
						<>
							<a
								href={`https://github.com/DopamineDriven/${EXAMPLE_PATH}`}
								target="__blank"
							>{`©${currentYear}`}</a>
						</>
					)}
				</div>
			</Container>
		</div>
	);
};


export default Alert;
