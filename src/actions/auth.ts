"use server";

import {SignFormData} from "@/app/auth/signup/page";
import {ParseServer} from "@/utils/parse/server";
import {cookies} from "next/headers";

export async function signup(data: SignFormData) {
		const user = await ParseServer.User.signUp(data.username, data.password, {
				fullName: data.fullName,
				email: data.email,
				phoneNumber: data.phoneNumber,
		});
		if (!user) {
				return;
		}
		cookies().set("_user", user.getSessionToken(), {maxAge: 3600});
		return user;
}

export async function login(data: any) {
		try {
				const user = await ParseServer.User.logIn(data.username, data.password);
				if (!user) {
						return;
				}
				cookies().set("_user", user.getSessionToken(), {maxAge: 3600});
				return user;
		} catch (e) {
				return {
						error: e.message || e.toString()
				}
		}
}
