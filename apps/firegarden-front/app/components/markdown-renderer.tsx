import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { cn } from "@firegarden/ui";

interface MarkdownRendererProps {
	content: string;
	className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
	content,
	className,
}) => {
	return (
		<div className={cn("prose prose-invert max-w-none", className)}>
			<ReactMarkdown
				rehypePlugins={[rehypeRaw, rehypeSanitize]}
				remarkPlugins={[remarkGfm]}>
				{content}
			</ReactMarkdown>
		</div>
	);
};
