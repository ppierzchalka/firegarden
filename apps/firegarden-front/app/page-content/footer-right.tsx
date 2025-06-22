"use client";

import { useEffect, useState } from "react";
import { type GitHubData } from "../lib/github";

export function FooterRight() {
	const [githubData, setGithubData] = useState<GitHubData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		async function fetchGitHubData() {
			try {
				setIsLoading(true);
				const response = await fetch("/api/github");

				if (!response.ok) {
					throw new Error("GitHub API response was not ok");
				}

				const data = await response.json();
				if (isMounted) {
					setGithubData(data);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					console.error("Failed to fetch GitHub data:", err);
					setError("Failed to fetch GitHub data");
				}
			} finally {
				if (isMounted) {
					setIsLoading(false);
				}
			}
		}

		fetchGitHubData();

		return () => {
			isMounted = false;
		};
	}, []);

	if (isLoading) {
		return (
			<div aria-label="GitHub statistics loading">
				<span className="text-primary" aria-hidden="true">
					$
				</span>{" "}
				<span className="text-foreground/70">fetching github data...</span>
			</div>
		);
	}

	if (error || !githubData) {
		return (
			<div aria-label="GitHub statistics error">
				<span className="text-primary" aria-hidden="true">
					$
				</span>{" "}
				<span className="text-foreground/70">github:</span>{" "}
				<span className="text-foreground/70">data unavailable</span>
			</div>
		);
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
					<span aria-label={`Last commit ${githubData.lastCommitDate}`}>
						{githubData.lastCommitDate}
					</span>
				</>
			)}
		</div>
	);
}
