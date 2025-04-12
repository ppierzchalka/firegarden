export const BioContent = () => (
	<div className="font-code text-foreground/90 terminal-container">
		<div className="text-xs text-primary mb-4">
			<span>$ cat about-me.txt</span>
		</div>

		<div className={`space-y-4 terminal-text`}>
			<p>
				I'm a front-end developer with 5 years of experience building
				responsive, accessible, and performant web applications. I specialize in
				React, TypeScript, and modern CSS techniques.
			</p>

			<p>
				My approach to development focuses on creating intuitive user
				experiences while maintaining clean, maintainable code. I'm passionate
				about web standards, performance optimization, and staying current with
				the latest front-end technologies.
			</p>

			<p>
				When I'm not coding, you can find me hiking, reading science fiction, or
				experimenting with new cooking recipes.
			</p>
		</div>

		<div className="mt-4 text-xs text-muted-foreground flex items-center">
			<span className="text-primary mr-2">$</span>
			<span className="inline-block w-2 h-4 bg-primary animate-blink"></span>
		</div>
	</div>
);
