import Image from "next/image";
import SideBar from "../shared/components/SideBar";

export default function Dashboard() {
  return (
    <div className=" bg-m3-sys-light-on-primary h-screen flex text-left text-sm text-cornflowerblue-100 font-lalezar">
      <SideBar />
      <div className="absolute top-[0px] left-[218px] w-[1062px] flex flex-col items-start justify-start p-3 box-border text-left text-7xl text-cornflowerblue-100 font-lalezar">
        <div className="relative">Instances Management</div>
        <div className="rounded-lg w-[1034px] flex flex-col items-center justify-start py-6 px-3 box-border gap-[64px] text-sm text-black font-m3-label-large">
          <div className="relative">
            There are no DHIS2 analytics messenger instances created. Get
            started below!
          </div>
          <div
            className="rounded-81xl bg-cornflowerblue-100 w-[175px] overflow-hidden flex flex-row items-center justify-center cursor-pointer text-center text-m3-sys-light-on-primary"
            // onClick={openRegisterInstanceModal}
          >
            <div className="flex-1 flex flex-row items-center justify-center py-2.5 pr-6 pl-4 gap-[8px]">
              <div className="relative leading-[20px] font-medium">
                Get Started
              </div>
              <Image
                className="relative w-6 h-6"
                alt=""
                src="/arrow-forward.svg"
				width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
