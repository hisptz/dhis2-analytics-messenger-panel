import { Button, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import LoginSide from "../LoginSide";
import SignUpSide from "../SignUpSide";
// import AnalyticsChatbotContainer from "./AnalyticsChatbotContainer";
import ImageCarousel from "../Carousel";

type LoginFormContainerType = {
  /** Style props */
  containerTop?: CSSProperties["top"];
  containerLeft?: CSSProperties["left"];
};

const LoginFormContainer: NextPage<LoginFormContainerType> = ({
  containerTop,
  containerLeft,
}) => {
  const typeloginStyle: CSSProperties = useMemo(() => {
    return {
      top: containerTop,
      left: containerLeft,
    };
  }, [containerTop, containerLeft]);

  return (
    <div
      className="absolute top-[20px] left-[20px] w-[800px] h-[560px] text-left text-5xl text-black font-inter "
      style={typeloginStyle}
    >
      <div className="absolute h-full w-full top-[0%] ">
        <div className="absolute h-full w-full rounded-lg bg-m3-sys-light-on-primary shadow-[0px_2px_5px_rgba(0,_142,_221,_0.25)]" />
        <Image
          className="absolute h-full w-[53.13%] top-[0%] right-[46.88%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/sideinfo@2x.png"
          width={400}
          height={560}
        />
        <div className="absolute h-[72.86%] w-[43.75%] top-[13.57%] right-[53.13%] bottom-[13.57%] left-[3.13%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(100px)]" />
          <div className="absolute h-[82.84%] w-[95.34%] top-[0%] right-[2.22%] bottom-[17.16%] left-[2.44%] flex flex-col items-center justify-start py-5 px-2.5 box-border gap-[30px]">
            <div className="relative inline-block w-[300px] text-cornflowerblue-100">
              <p className="m-0 text-center">Welcome to</p>
              <p className="m-0 text-[24px] font-lalezar text-center font-[900]">
                DHIS2 Analytics Messenger
              </p>
            </div>
            <div className="relative text-center text-base text-cornflowerblue-100 font-m3-label-large">
              <ImageCarousel />
            </div>

            {/* <AnalyticsChatbotContainer
              widgetDimensions="/configurebot.svg"
              analyticsChatbotConfigura="Manage your Analytics Instances"
              propTop="unset"
              propHeight="176px"
              propPosition="relative"
              propLeft="unset"
              propHeight1="62.96%"
              propWidth="47.25%"
              propTop1="0%"
              propRight="26.21%"
              propBottom="37.04%"
              propLeft1="26.54%"
              propHeight2="11.64%"
              propTop2="71.36%"
            /> */}
          </div>
        </div>
      </div>

      {/* <LoginSide /> */}
      <SignUpSide />
    </div>
  );
};

export default LoginFormContainer;
