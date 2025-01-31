import "./globals.css";
import Header from "./components/Header";
import { Metadata } from "next";
import Head from "next/head";
import StoreProvider from "./lib/redux/provider";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: 'Astronomy Events',
	
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<body className={'font-roboto'}>
				<StoreProvider>
					<Header />
					{children}
					<Footer />
				</StoreProvider>
			</body>
		</html>
	);
}
