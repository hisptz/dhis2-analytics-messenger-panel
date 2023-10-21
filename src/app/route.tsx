import {NextRequest, NextResponse} from "next/server";


export function GET(req: NextRequest) {
		const base = req.nextUrl.href
		return NextResponse.redirect(`${base}/dashboard`);
}
