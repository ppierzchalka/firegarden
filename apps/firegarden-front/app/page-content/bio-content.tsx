import { TerminalCard } from "@firegarden/ui";

export const BioContent = () => (
	<TerminalCard command="$ cat about-me.txt">
		<div className="space-y-4">
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
	</TerminalCard>
);
