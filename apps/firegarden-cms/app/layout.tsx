import type { Metadata } from "next";
import "@firegarden/tailwind-config/styles";
import { FiregardenProvider, HydrationSuppressor } from "@firegarden/ui";
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
			<body suppressHydrationWarning>
				<HydrationSuppressor>
					<FiregardenProvider>{children}</FiregardenProvider>
				</HydrationSuppressor>
			</body>
		</html>
	);
}
