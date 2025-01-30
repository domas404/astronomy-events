import "./globals.css";
import Header from "./components/Header";
import { Metadata } from "next";
// import { store } from "./lib/redux/store";
// import { Provider } from "react-redux";
import StoreProvider from "./lib/redux/provider";

export const metadata: Metadata = {
	title: 'Astronomy Events',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
				<body
					className={''}
				>
				<StoreProvider>
					<Header />
					{children}
				</StoreProvider>
				</body>
			</html>
	);
}
