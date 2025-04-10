import type { Metadata } from "next";
import "@firegarden/tailwind-config/styles";
import { FiregardenProvider } from "@firegarden/ui";

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
		<html lang="en">
			<body>
				<FiregardenProvider>{children}</FiregardenProvider>
			</body>
		</html>
	);
}
