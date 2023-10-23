"use client";
import {Button, Divider} from "@mui/material";
import {useRouter} from "next/navigation";
import {z} from "zod"
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import Link from "next/link";
import {RHFTextInput} from "@/components/RHFTextInput";
import {RHFCheckbox} from "@/components/RHFCheckbox";

const label = {inputProps: {"aria-label": "Checkbox"}};


const signupFormSchema = z.object({
		fullName: z.string().refine((value) => value.includes(" "), "A space is required between your first and last name"),
		username: z.string().min(4, "Username should have at least 4 characters"),
		phoneNumber: z.string().optional(),
		email: z.string().email(),
		password: z.string().min(8, "Password should have at least 8 characters").regex(/[A-Z]/, "Password should have at least one capital letter").regex(/\d/, "Password should have at least one number"),
		consent: z.boolean().refine((value) => value, "You must consent to the privacy policy to continue")
})

export type SignFormData = z.infer<typeof signupFormSchema>;

export default function SignUpSide() {
		const [showPassword, setShowPassword] = useState(false);

		const onSignup = (data: SignFormData) => {
				console.log(data)
		}

		const form = useForm<SignFormData>({
				resolver: zodResolver(signupFormSchema),
				defaultValues: {
						consent: true
				}
		})
		const {replace} = useRouter();

		const onLoginClicked = () => {
				replace("login");
		}

		return (
				<div
						className="h-full flex flex-col items-center justify-start gap-[16px] text-center py-[32px]">
						<div className="text-primary-500 font-bold text-2xl ">Signup</div>
						<div className="flex flex-col gap-[32px]">
								<FormProvider {...form} >
										<form onSubmit={form.handleSubmit(onSignup)}
													className="flex flex-col items-start justify-start gap-[24px] w-full">
												<div className="flex flex-col items-center justify-start gap-[16px]">
														<RHFTextInput
																name="fullName"
																required
																fullWidth
																type="text"
																id="fullname"
																label="Full Name"
																size="small"
														/>
														<RHFTextInput
																name="username"
																required
																fullWidth
																type="text"
																id="username"
																label="Username"
																size="small"
														/>
														<RHFTextInput
																name="phoneNumber"
																required
																fullWidth
																type="tel"
																id="phonenumber"
																label="Phone Number"
																size="small"
														/>
														<RHFTextInput
																name="email"
																required
																fullWidth
																type="email"
																id="email"
																label="Email"
																size="small"
														/>
														<RHFTextInput
																name="password"
																required
																fullWidth
																type="password"
																id="password"
																label="Password"
																size="small"
														/>
														<RHFCheckbox name="consent" label={<>I have read and consent to the <Link color="#008edd"
																																																			className="text-primary-500 underline"
																																																			href="/">privacy
																policy</Link></>}/>
												</div>
												<Button type="submit" fullWidth className="bg-primary-500 rounded-full pointer text-white"
																variant="contained">
														Signup
												</Button>
										</form>
								</FormProvider>
								<div className="flex flex-col gap-[16px]">
										<Divider role="presentation" color="primary">
												OR
										</Divider>
										<Button className=" rounded-full pointer text-primary-500"
														variant="outlined" onClick={onLoginClicked}>
												Login
										</Button>
								</div>
						</div>
				</div>
		);
}
