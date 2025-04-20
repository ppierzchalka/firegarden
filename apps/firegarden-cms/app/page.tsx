"use client";

import dynamic from "next/dynamic";
import { BrowserRouter } from "react-router-dom";

// Use dynamic import with SSR disabled for FireCMS
// This is important because FireCMS uses browser APIs not available during SSR
const FireCMSApp = dynamic(() => import("./components/FireCMSProvider"), {
	ssr: false,
});

export default function Home() {
	console.log(process);
	return (
		<div className="w-screen h-screen">
			<FireCMSApp />
		</div>
	);
}
