`use client`;
import { Button, TextField } from "@mui/material";

interface LoginProps {
  onloginClicked: () => void;
}

export default function SignUpSide(props:LoginProps) {
  return (
    <div className="absolute top-[30px] right-[53%] flex flex-col items-center justify-start gap-[10px] text-center text-cornflowerblue-100 font-m3-label-large">
      <div className="relative">Sign Up</div>
      <div className="relative w-[350px] h-[336px] text-left text-sm text-black">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <TextField
              className="w-[350px] h-[56px]"
              id="username"
              label="Username"
              variant="outlined"
            />
            <TextField
              className="w-[350px] h-[56px]"
              id="email"
              label="email"
              variant="outlined"
            />
            <TextField
              className="w-[350px] h-[56px]"
              id="password"
              label="Password"
              variant="outlined"
            />

            <div className="relative w-[300px] h-6">
              <div className="absolute top-[0px] left-[0px] leading-[24px]">
                <span>{`I have read and consent to the  `}</span>
                <span className="[text-decoration:underline] text-cornflowerblue-100">
                  <a>privacy policy.</a>
                </span>
              </div>
            </div>
          </div>

          <Button
            className="bg-cornflowerblue-100 w-[350px] rounded-full pointer text-white"
            variant="contained"
          >
            Sign up
          </Button>
        </div>
        <div className="absolute top-[330px] left-[0px] w-[350px] h-20 text-center">
          <Button
            className="w-[350px] rounded-full pointer text-cornflowerblue-100 top-10"
            variant="outlined"
            onClick={props.onloginClicked}
          >
            Login
          </Button>

          <div className="absolute top-[0px] left-[0px] w-[350px] h-5">
            <span className="absolute top-[0px] left-[166px] leading-[20px] font-medium ">
              OR
            </span>
            <div className="absolute top-[9.5px] left-[-0.5px] box-border w-[161px] h-px border-t-[1px] border-solid border-cornflowerblue-100" />
            <div className="absolute top-[9.5px] left-[189.5px] box-border w-[161px] h-px border-t-[1px] border-solid border-cornflowerblue-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
