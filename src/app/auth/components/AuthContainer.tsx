"use client";
import React from "react";
import type {NextPage} from "next";
import ImageCarousel from "./Carousel";
import {usePathname} from "next/navigation";
import {Card} from "@mui/material";

type LoginFormContainerType = {
		children: React.ReactNode
};

const AuthContainer: NextPage<LoginFormContainerType> = ({
																														 children
																												 }) => {
		const pathname = usePathname();
		const showSignUp = pathname.includes('signup')

		const carouselDivStyle = {
				transform: showSignUp ? 'translateX(100%)' : 'translateX(0)',
				transition: 'transform 0.5s ease-in-out',
		};

		const formDivStyle = {
				transform: showSignUp ? 'translateX(-100%)' : 'translateX(0)',
				transition: 'transform 0.5s ease-in-out',
		};

		return (
				<Card
						className="absolute w-[800px] h-[680px]"
						style={{
								top: `calc(50vh - 280px)`,
								left: `calc(50vw - 400px)`,
						}}
				>
						<div className="h-full w-full flex flex-row justify-between">
								<div
										style={carouselDivStyle}
										className="flex-1 flex flex-col bg-yellow-400 justify-center items-center h-full min-h-[80%]">
										<div
												style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 100%)'}}
												className="flex flex-col items-center justify-start box-border gap-[24px] rounded-lg p-4">
												<div className="relative inline-block w-[300px] text-primary-500">
														<p className="m-0 font-medium">Welcome to</p>
														<p className="m-0 text-[24px] text-center font-[700]">
																DHIS2 Analytics Messenger
														</p>
												</div>
												<div className="relative text-center text-base text-primary-500 font-m3-label-large">
														<ImageCarousel/>
												</div>
										</div>
								</div>
								<div style={formDivStyle} className="flex-1 h-full flex flex-col items-center justify-center bg-white">
										{children}
								</div>
						</div>
				</Card>
		);
};

export default AuthContainer;
