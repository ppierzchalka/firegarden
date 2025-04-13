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
	// Check if current date is in daylight saving time (CEST) or standard time (CET)
	const isDST = () => {
		const today = new Date();
		// Get jan and jul to check if we're in DST (Poland follows EU DST rules)
		const jan = new Date(today.getFullYear(), 0, 1).getTimezoneOffset();
		const jul = new Date(today.getFullYear(), 6, 1).getTimezoneOffset();
		return Math.max(jan, jul) !== today.getTimezoneOffset();
	};

	const timezone = isDST() ? "CEST" : "CET";

	return (
		<>
			<span className="text-primary mr-1">$</span> location: łódź | timezone:{" "}
			{timezone}
		</>
	);
};
