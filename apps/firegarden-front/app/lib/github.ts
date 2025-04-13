import { Octokit } from "octokit";

// GitHub username to fetch data from environment variable (no fallback)
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

// Initialize Octokit
// Note: For public repositories and basic info, we don't need authentication
// For private repositories or increased rate limits, you would need to use a personal access token
const octokit = new Octokit();

export type GitHubData = {
	publicReposCount: number;
	lastCommitDate: string; // Will be empty string if commit is older than 2 months
};

export async function getGitHubData(): Promise<GitHubData | null> {
	// If no GitHub username is provided, don't fetch any data
	if (!GITHUB_USERNAME) {
		return null;
	}

	try {
		// Get user info including public repos count
		const { data: userData } = await octokit.request("GET /users/{username}", {
			username: GITHUB_USERNAME,
		});

		// Get user's events to find the most recent commit
		const { data: events } = await octokit.request(
			"GET /users/{username}/events/public",
			{
				username: GITHUB_USERNAME,
				per_page: 100,
			}
		);

		// Find the most recent PushEvent (commit)
		const pushEvents = events.filter(
			(event: any) => event.type === "PushEvent"
		);

		const lastCommitDate =
			pushEvents.length > 0 ? pushEvents[0]?.created_at : "unknown";

		// Check if last commit is older than 2 months
		const lastCommitObj = lastCommitDate && new Date(lastCommitDate);
		const now = new Date();
		const twoMonthsAgo = new Date();
		twoMonthsAgo.setMonth(now.getMonth() - 2);

		const formattedLastCommitDate =
			lastCommitObj &&
			lastCommitDate !== "unknown" &&
			lastCommitObj > twoMonthsAgo
				? formatDate(lastCommitObj)
				: ""; // Empty string if older than 2 months

		return {
			publicReposCount: userData.public_repos,
			lastCommitDate: formattedLastCommitDate,
		};
	} catch (error) {
		console.error("Error fetching GitHub data:", error);
		return null;
	}
}

function formatDate(date: Date): string {
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - date.getTime());
	const diffMinutes = Math.floor(diffTime / (1000 * 60));
	const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

	// For more granular time reporting
	if (diffMinutes < 5) {
		return "just now";
	} else if (diffMinutes < 60) {
		return `${diffMinutes} minutes ago`;
	} else if (diffHours < 24) {
		return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
	} else if (diffDays === 1) {
		return "yesterday";
	} else if (diffDays < 7) {
		return `${diffDays} days ago`;
	} else if (diffDays < 30) {
		const weeks = Math.floor(diffDays / 7);
		return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
	} else {
		const months = Math.floor(diffDays / 30);
		return `${months} ${months === 1 ? "month" : "months"} ago`;
	}
}
