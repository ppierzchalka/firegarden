import { MarkdownRenderer } from "../components/markdown-renderer";
import { fetchSiteConfig } from "../lib/firebase-utils";

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
