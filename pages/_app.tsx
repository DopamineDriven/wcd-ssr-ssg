import { AppProps } from "next/app";
import "../styles/index.css";

// export function reportWebVitals(metric: any) {
// 	console.log(metric);
// }

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
