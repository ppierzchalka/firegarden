export const HeaderLogo = () => (
	<>
		<span className="font-medium tracking-wide text-foreground group-hover:text-primary transition-colors duration-500 ease-in-out">
			ppierzchalka
		</span>
		<span className="font-medium tracking-wide text-primary group-hover:text-foreground transition-colors duration-500 ease-in-out theme-glow">
			.is-a.dev
		</span>
	</>
);

export const HeaderRight = () => {
	const isDST = () => {
		const today = new Date();
		const jan = new Date(today.getFullYear(), 0, 1).getTimezoneOffset();
		const jul = new Date(today.getFullYear(), 6, 1).getTimezoneOffset();
		return Math.max(jan, jul) !== today.getTimezoneOffset();
	};

	const timezone = isDST() ? "CEST" : "CET";

	return (
		<>
			<span className="text-primary mr-1" aria-hidden="true">
				$
			</span>
			<span aria-label="Location: Łódź, Timezone: Central European">
				location: łódź | timezone: {timezone}
			</span>
		</>
	);
};
