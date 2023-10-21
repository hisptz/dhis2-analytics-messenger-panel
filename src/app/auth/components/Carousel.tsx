"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

export default function AuthCarousel() {

		return (<div className="w-[300px]">
				<Carousel
						autoPlay
						infiniteLoop
						showArrows={false}
						showStatus={false}
						showThumbs={false}
						showIndicators={false}
				>
						<div>
								<Image className="h-[140px]" src="/chatbot.svg" width={45} height={45} alt="image1"/>
								<p className="font-medium mt-3 text-lg">Configure your always available Analytics Chat-bot</p>
						</div>
						<div>
								<Image className="h-[140px]"
											 src="/configurebot.svg"
											 width={100}
											 height={100}
											 alt="configurebot"
								/>
								<p className="font-medium mt-3 text-lg">Manage your Analytics Instances</p>
						</div>
						<div>
								<Image className="h-[140px]"
											 src="/analytics.svg"
											 width={100}
											 height={100}
											 alt="image2"
								/>
								<p className="font-medium mt-3 text-lg">Schedule your DHIS2 push analytics</p>
						</div>
						<div>
								<Image className="h-[140px]"
											 src="/pushanalytics.svg"
											 width={100}
											 height={100}
											 alt="image2"
								/>
								<p className="font-medium mt-3 text-lg">Manually trigger DHIS2 push analytics</p>
						</div>
				</Carousel>
		</div>)

}
