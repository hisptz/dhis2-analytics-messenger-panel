import {NextRequest, NextResponse} from "next/server";
import Parse from "parse/node"
import {initializeServerParse} from "@/utils/parse";
import {some} from "lodash";

initializeServerParse()

export function middleware(req: NextRequest) {
		//Check auth
		if (some(["dashboard"], (route) => {
				return req.nextUrl.pathname.includes(route)
		})) {
				const currentUser = Parse.User.current();
				if (currentUser == null) {
						const baseUrl = req.nextUrl.basePath;
						return NextResponse.redirect(new URL(`${baseUrl}/auth/login`, req.url))
				} else {
						return NextResponse.next()
				}
		}
		return NextResponse.next()
}
