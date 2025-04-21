import { MarkdownRenderer } from "../components/markdown-renderer";
import { fetchSiteConfig } from "../lib/firebase-utils";
import { getGitHubData } from "../lib/github";

export async function FooterLeft() {
	const siteConfig = await fetchSiteConfig();

	if (!siteConfig) {
		return (
			<>
				<span className="text-primary" aria-hidden="true">
					$
				</span>{" "}
				<span className="text-foreground/70">stack:</span>{" "}
				<span>Configuration not found</span>
			</>
		);
	}

	return (
		<>
			<span className="text-primary" aria-hidden="true">
				$
			</span>{" "}
			<span className="text-foreground/70">stack:</span>{" "}
			<MarkdownRenderer
				className="text-foreground/70"
				inline
				content={siteConfig.tech_stack}
			/>
		</>
	);
}

export async function FooterRight() {
	const githubData = await getGitHubData();

	if (!githubData) {
		return null;
	}

	return (
		<div aria-label="GitHub statistics">
			<span className="text-primary" aria-hidden="true">
				$
			</span>{" "}
			<span className="text-foreground/70">repos:</span>{" "}
			<span aria-label={`${githubData.publicReposCount} public repositories`}>
				{githubData.publicReposCount}
			</span>
			{githubData.lastCommitDate && (
				<>
					{" "}
					<span className="text-primary" aria-hidden="true">
						|
					</span>{" "}
					<span className="text-foreground/70">last_commit:</span>{" "}
					<span aria-label={`Last commit on ${githubData.lastCommitDate}`}>
						{githubData.lastCommitDate}
					</span>
				</>
			)}
		</div>
	);
}
