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
		<html lang="en">
			<body suppressHydrationWarning>
				<HydrationSuppressor>
					<FiregardenProvider>{children}</FiregardenProvider>
				</HydrationSuppressor>
			</body>
		</html>
	);
}
