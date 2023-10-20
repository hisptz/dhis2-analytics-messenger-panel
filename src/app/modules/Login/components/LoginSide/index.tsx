"use client";
import { Button, TextField } from "@mui/material";

interface LoginSideProps {
  onSignUpClicked: () => void;
}


export default function LoginSide({ onSignUpClicked }: LoginSideProps)  {
 return(
    <div className="absolute top-[77px] left-[425px] flex flex-col items-center justify-start gap-[10px] text-center text-cornflowerblue-100 font-m3-label-large">
    <div className="relative">Login</div>
    <div className="relative w-[350px] h-[336px] text-left text-sm text-black">
      <form>
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-col items-center justify-start gap-[20px]">
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

          <div className="relative w-[218px] h-6">
            <div className="absolute top-[0px] left-[0px] leading-[24px]">
              <span>{`Forgot your password?  `}</span>
              <span className="[text-decoration:underline] text-cornflowerblue-100">
                <span>Click here!.</span>
                <span className="text-black">{` `}</span>
              </span>
            </div>
          </div>
        </div>
      
        <Button className="bg-cornflowerblue-100 w-[350px] rounded-full pointer text-white" variant="contained">
          Login
        </Button>
      </div>
      <div className="absolute top-[256px] left-[0px] w-[350px] h-20 text-center">
       <Button className="w-[350px] rounded-full pointer text-cornflowerblue-100 top-10" variant="outlined"  onClick={onSignUpClicked}>
          Sign up
        </Button>
  
        <div className="absolute top-[0px] left-[0px] w-[350px] h-5">
          <span className="absolute top-[0px] left-[166px] leading-[20px] font-medium">
            OR
          </span>
          <div className="absolute top-[9.5px] left-[-0.5px] box-border w-[161px] h-px border-t-[1px] border-solid border-cornflowerblue-100" />
          <div className="absolute top-[9.5px] left-[189.5px] box-border w-[161px] h-px border-t-[1px] border-solid border-cornflowerblue-100" />
        </div>
      </div>
      </form>
    </div>
  </div>
 )
}
