import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@firegarden/ui";

export default function Home() {
	return (
		<div className=" w-screen h-screen flex items-center justify-center bg-slate-900 text-gray-800 ">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Pro Plan</CardTitle>
					<CardDescription>
						<span className="text-3xl font-bold">$24</span>
						<span className="text-muted-foreground"> /month</span>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ul className="space-y-2">
						<li className="flex items-center">
							<svg
								className="mr-2 h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Unlimited projects
						</li>
						<li className="flex items-center">
							<svg
								className="mr-2 h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Advanced analytics
						</li>
						<li className="flex items-center">
							<svg
								className="mr-2 h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Priority support
						</li>
						<li className="flex items-center">
							<svg
								className="mr-2 h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Custom integrations
						</li>
					</ul>
				</CardContent>
				<CardFooter>
					<Button className="w-full">Subscribe Now</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
