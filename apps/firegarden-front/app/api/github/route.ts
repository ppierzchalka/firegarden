import { NextResponse } from "next/server";
import { getGitHubData } from "../../lib/github";

export async function GET() {
	try {
		const data = await getGitHubData();

		if (!data) {
			return NextResponse.json(
				{ error: "Failed to fetch GitHub data" },
				{ status: 404 }
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error("GitHub API error:", error);
		return NextResponse.json(
			{ error: "Failed to fetch GitHub data" },
			{ status: 500 }
		);
	}
}
