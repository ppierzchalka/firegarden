import type { Metadata } from "next";
import "@firegarden/tailwind-config/styles";
import { HydrationSuppressor } from "@firegarden/ui";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Firegarden CMS",
	description: "Content Management System for Firegarden",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<HydrationSuppressor>{children}</HydrationSuppressor>
			</body>
		</html>
	);
}
