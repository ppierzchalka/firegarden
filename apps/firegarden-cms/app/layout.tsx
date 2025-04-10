import type { Metadata } from "next";
import "@firegarden/tailwind-config/styles";
import { FiregardenProvider } from "@firegarden/ui";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
	title: "Firegarden CMS",
	description: "Content Management System for Firegarden",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body>
				<FiregardenProvider
					fonts={{
						geistSans,
						geistMono,
					}}>
					{children}
				</FiregardenProvider>
			</body>
		</html>
	);
}
