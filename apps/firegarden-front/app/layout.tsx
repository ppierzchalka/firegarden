import type { Metadata } from "next";
import "@firegarden/tailwind-config/styles";
import { FiregardenProvider, HydrationSuppressor } from "@firegarden/ui";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Przemysław Pierzchałka - ppierzchalka.is-a.dev",
	description: "Przemysław Pierzchałka - Frontend Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
			</head>
			<body suppressHydrationWarning>
				<HydrationSuppressor>
					<FiregardenProvider>{children}</FiregardenProvider>
				</HydrationSuppressor>
			</body>
		</html>
	);
}
