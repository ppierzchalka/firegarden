import { getGitHubData } from "../lib/github";

export async function FooterLeft() {
	return (
		<>
			<span className="text-primary">$</span>{" "}
			<span className="text-foreground/70">stack:</span> react, rxjs, typescript
		</>
	);
}

export async function FooterRight() {
	const githubData = await getGitHubData();

	if (!githubData) {
		return null;
	}

	return (
		<>
			<span className="text-primary">$</span>{" "}
			<span className="text-foreground/70">repos:</span>{" "}
			{githubData.publicReposCount}
			{githubData.lastCommitDate && (
				<>
					{" "}
					<span className="text-primary">|</span>{" "}
					<span className="text-foreground/70">last_commit:</span>{" "}
					{githubData.lastCommitDate}
				</>
			)}
		</>
	);
}
