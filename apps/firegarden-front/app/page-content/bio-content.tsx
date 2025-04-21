import { TerminalCard } from "@firegarden/ui";
import { fetchSiteConfig } from "../lib/firebase-utils";
import { MarkdownRenderer } from "../components/markdown-renderer";

export async function BioContent() {
	const siteConfig = await fetchSiteConfig();

	if (!siteConfig) {
		return (
			<TerminalCard command="$ cat about-me.txt" aria-label="About me section">
				<div className="space-y-4">
					<p>
						Site configuration not found. Please set up your site in the CMS.
					</p>
				</div>
			</TerminalCard>
		);
	}

	return (
		<TerminalCard command="$ cat about-me.txt" aria-label="About me section">
			<div className="space-y-4">
				<MarkdownRenderer content={siteConfig.about_me} />
			</div>
		</TerminalCard>
	);
}
