

const Avatar = ({ name, image }: { name: string; image: string }) => {
	return (
		<div className="flex items-center">
			<img src={image} className="w-12 h-12 rounded-full mr-4" alt={name} />
			<div className="text-xl font-bold">{name}</div>
		</div>
	);
};

export default Avatar;
