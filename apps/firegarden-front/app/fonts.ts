import { LocalFont } from "next/font/local";

// Load Geist Sans font
export const geistSans = LocalFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	display: "swap",
});

// Load Geist Mono font
export const geistMono = LocalFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	display: "swap",
});
