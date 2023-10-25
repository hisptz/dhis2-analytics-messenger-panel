"use client";


import {ParseClient} from "@/utils/parse/client";
import {useRouter} from "next/navigation";

export default function Router() {
		const {replace} = useRouter();
		const user = ParseClient.User.current();

		if (user) {
				replace("/dashboard")
		} else {
				replace("auth/login")
		}

		return null;
}
