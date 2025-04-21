import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { cn } from "@firegarden/ui";

interface MarkdownRendererProps {
	content: string;
	className?: string;
	inline?: boolean;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
	content,
	className,
	inline = false,
}) => {
	// For inline mode, directly render the content without p tags
	if (inline) {
		return (
			<span className={cn(className)}>
				<ReactMarkdown
					components={{
						// Override paragraph to render as inline span instead of block p
						p: ({ children }) => <span>{children}</span>,
						// Prevent other block elements from breaking the flow
						h1: ({ children }) => <span>{children}</span>,
						h2: ({ children }) => <span>{children}</span>,
						h3: ({ children }) => <span>{children}</span>,
						h4: ({ children }) => <span>{children}</span>,
						h5: ({ children }) => <span>{children}</span>,
						h6: ({ children }) => <span>{children}</span>,
						ul: ({ children }) => <span>{children}</span>,
						ol: ({ children }) => <span>{children}</span>,
						li: ({ children }) => <span>{children}</span>,
						blockquote: ({ children }) => <span>{children}</span>,
					}}
					rehypePlugins={[rehypeRaw, rehypeSanitize]}
					remarkPlugins={[remarkGfm]}>
					{content}
				</ReactMarkdown>
			</span>
		);
	}

	// Normal block mode
	return (
		<div className={cn(className)}>
			<ReactMarkdown
				rehypePlugins={[rehypeRaw, rehypeSanitize]}
				remarkPlugins={[remarkGfm]}>
				{content}
			</ReactMarkdown>
		</div>
	);
};
