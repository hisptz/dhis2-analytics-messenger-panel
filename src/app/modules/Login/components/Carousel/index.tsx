"use client";
import React, { Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="h-[200px]">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          <div>
            <Image className="h-[140px]" src="/chatbot.svg" width={45} height={45} alt="image1" />
            <p className="font-medium mt-3">Configure your Always availabe Analytics Chatbot</p>
          </div>
          <div>
            <Image className="h-[140px]"
              src="/configurebot.svg"
              width={100}
              height={100}
              alt="configurebot"
            />
            <p className="font-medium mt-3">Manage your Analytics Instances</p>
          </div>
          <div>
            <Image className="h-[140px]"
              src="/analytics.svg"
              width={100}
              height={100}
              alt="image2"
            />
            <p className="font-medium mt-3">Schedule your DHIS2 push analytics</p>
          </div>
          <div>
            <Image className="h-[140px]"
              src="/pushanalytics.svg"
              width={100}
              height={100}
              alt="image2"
            />
            <p className="font-medium mt-3">Manually trigger DHIS2 push analytics</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
