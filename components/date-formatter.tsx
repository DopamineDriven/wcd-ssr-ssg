import { parseISO, format } from "date-fns";

const DateFormater = ({ dateString }: { dateString: string }) => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormater;
