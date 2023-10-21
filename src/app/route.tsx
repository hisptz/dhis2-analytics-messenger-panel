import {NextRequest, NextResponse} from "next/server";


export function GET(req: NextRequest) {
		const baseUrl = req.nextUrl.href;
		return NextResponse.redirect(`${baseUrl}/auth/login`)
}
