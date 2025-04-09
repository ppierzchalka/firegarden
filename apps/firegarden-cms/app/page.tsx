import { Button } from "@repo/ui/Button";

export default function Home() {
	const isActive = true;

	return (
		<div className=" w-screen h-screen flex items-center justify-center bg-slate-900 text-gray-800 ">
			<Button className="p-28 hover:bg-white hover:text-black shadow-lg">
				FIREGARDEN CMS
			</Button>
		</div>
	);
}
