"use client";
import {Button, Checkbox, Divider, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import Link from "next/link";

const label = {inputProps: {"aria-label": "Checkbox"}};


const signupFormSchema = z.object({
		fullName: z.string().refine((value) => value.includes(" "), "A space is required between your first and last name"),
		username: z.string().min(4, "Username should have at least 4 characters"),
		phoneNumber: z.string().optional(),
		email: z.string().email(),
		password: z.string().min(8, "Password should have at least 8 characters").regex(/[A-Z]/, "Password should have at least one capital letter").regex(/\d/, "Password should have at least one number"),
})

type SignForm = z.infer<typeof signupFormSchema>;

export default function SignUpSide() {
		const [showPassword, setShowPassword] = useState(false);

		const onSignup = (data: SignForm) => {
				console.log(data)
		}

		const form = useForm<SignForm>({
				resolver: zodResolver(signupFormSchema)
		})
		const {replace} = useRouter();

		const onLoginClicked = () => {
				replace("login");
		}

		return (
				<div
						className="h-full flex flex-col items-center justify-start gap-[16px] text-center py-[32px]">
						<div className="text-cornflowerblue-100 font-bold text-5xl ">Signup</div>
						<div className="flex flex-col gap-[32px]">
								<form onSubmit={form.handleSubmit(onSignup)}
											className="flex flex-col items-start justify-start gap-[24px] w-full">
										<div className="flex flex-col items-center justify-start gap-[16px]">
												<TextField
														{...form.register("fullName")}
														required
														fullWidth
														type="text"
														id="fullname"
														label="Full Name"
														variant="outlined"
														error={!!form.formState.errors.fullName}
														helperText={form.formState.errors.fullName?.message}
												/>
												<TextField
														{...form.register("username")}
														required
														fullWidth
														type="text"
														id="username"
														label="Username"
														variant="outlined"
														error={!!form.formState.errors.username}
														helperText={form.formState.errors.username?.message}
												/>
												<TextField
														{...form.register("phoneNumber")}
														required
														fullWidth
														type="tel"
														id="phonenumber"
														label="Phone Number"
														variant="outlined"
														error={!!form.formState.errors.phoneNumber}
														helperText={form.formState.errors.phoneNumber?.message}
												/>
												<TextField
														{...form.register("email")}
														required
														fullWidth
														type="email"
														id="email"
														label="Email"
														variant="outlined"
														error={!!form.formState.errors.email}
														helperText={form.formState.errors.email?.message}
												/>
												<TextField
														{...form.register("password")}
														required
														fullWidth
														type="password"
														id="password"
														label="Password"
														variant="outlined"
														error={!!form.formState.errors.password}
														helperText={form.formState.errors.password?.message}
												/>
												<div className="flex flex-row gap-2 items-center">
														<Checkbox defaultChecked/>
														<span className="text-sm">I have read and consent to the <Link color="#008edd"
																																													 className="text-cornflowerblue-100 underline"
																																													 href="/">privacy policy</Link></span>
												</div>
										</div>
										<Button type="submit" fullWidth className="bg-cornflowerblue-100 rounded-full pointer text-white"
														variant="contained">
												Signup
										</Button>
								</form>
								<div className="flex flex-col gap-[16px]">
										<Divider role="presentation" color="primary">
												OR
										</Divider>
										<Button className=" rounded-full pointer text-cornflowerblue-100"
														variant="outlined" onClick={onLoginClicked}>
												Login
										</Button>
								</div>
						</div>
				</div>
		);
}
