"use client";
import {Button, Divider, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import Link from "next/link";


export default function Login() {
		const {replace} = useRouter();
		const onSignUpClicked = () => {
				replace("signup")
		};

		return (
				<div
						className="h-80 flex flex-col items-center justify-start gap-[16px] text-center">
						<div className="text-primary-500 font-bold text-2xl ">Login</div>
						<div className="flex flex-col gap-[32px]">
								<form className="flex flex-col items-start justify-start gap-[24px] w-full">
										<div className="flex flex-col items-center justify-start gap-[16px]">
												<TextField
														className="w-[350px] h-[56px]"
														required
														type="text"
														id="username"
														label="Username"
														variant="outlined"
												/>
												<TextField
														className="w-[350px] h-[56px]"
														required
														type="password"
														id="password"
														label="Password"
														variant="outlined"
												/>
												<span className="text-sm">Forgot your password? <Link color="#008edd"
																																							className="text-primary-500 underline"
																																							href="/">Click here</Link></span>
										</div>
										<Button fullWidth className="bg-primary-500 rounded-full pointer text-white"
														variant="contained">
												Login
										</Button>
								</form>
								<div className="flex flex-col gap-[16px]">
										<Divider role="presentation" color="primary">
												OR
										</Divider>
										<Button className=" rounded-full pointer text-primary-500"
														variant="outlined" onClick={onSignUpClicked}>
												Sign up
										</Button>
								</div>
						</div>
				</div>
		)
}
