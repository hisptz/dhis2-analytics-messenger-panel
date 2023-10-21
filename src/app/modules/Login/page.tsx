import AuthContainer from "../../auth/components/AuthContainer";
import Image from 'next/image';

const LandingPage = () => {

  return (
    <div className=" bg-cornflowerblue-100 w-screen h-screen  text-center text-[18px] text-cornflowerblue-100 font-m3-label-large">

       <div className="absolute inset-0">
       <Image
            className="absolute h-full w-screen object-cover"
            alt="Background Vector Image"
            src="/vector.svg"
            width={1920}
            height={1080}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-center gap-[10px]">
          <Image
            className="relative w-[75px] h-[75px] object-cover"
            alt=""
            src="/hisptzlogo@2x.png"
            width={75}
            height={75}
					/>
          <div>
            <span>{`Developed by `}</span>
            <i className="font-bold">{`HISP Tanzania, `}</i>
            <span>Powered by</span>
            <i className="font-bold"> DHIS2</i>
          </div>
          <Image
            className="relative w-[75px] h-[75px] object-cover"
            alt=""
            src="/dhis2logo@2x.png"
            width={75}
            height={75}
          />
        </div>
      </div>
				<AuthContainer
        containerTop="calc(51% - 320px)"
        containerLeft="calc(50% - 400px)"
      />
    </div>
  );
};

export default LandingPage;
