import { SlideProps } from "./slider.types";

export const Slide = ({ title, id, children }: SlideProps) => (
	<div
		id={id}
		className="h-full w-full flex items-center justify-center shrink-0">
		<div className="container max-w-4xl px-4 mx-auto relative z-10">
			<div className="relative inline-block mb-6 px-4 py-1 bg-primary/5 border-l-2 border-blue/30">
				<h2 className="text-3xl font-bold tracking-tight font-code text-foreground">
					{title}
				</h2>
			</div>
			<div className="bg-background/30 border border-blue/10 p-6">
				{children}
			</div>
		</div>
	</div>
);
