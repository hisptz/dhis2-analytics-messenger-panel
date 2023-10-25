"use client";
import SideBar from "../shared/components/SideBar";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import DHIS2AnalyticsModal from "./components/InstanceModal";
import { useState } from "react";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" bg-white h-screen flex">
      <SideBar />
      <div className="flex flex-col items-start justify-start p-3   text-3xl text-primary-500 w-full">
        <div className="text-left font-bold">Instances Management</div>
        <div className=" flex flex-col items-center justify-center w-full py-6 px-auto gap-[64px] text-sm text-black font-m3-label-large">
          <h1>
            There are no DHIS2 analytics messenger instances created. Get
            started below!
          </h1>
          <Button
            className="bg-primary-500 cursor-pointer"
            color="primary"
            sx={{ textTransform: "none", borderRadius: "50px" }}
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => setOpenModal(true)} 
          >
            Get Started
          </Button>
          {openModal && <DHIS2AnalyticsModal open={openModal} onClose={() => setOpenModal(false)} />}

        </div>
      </div>
    </div>
  );
}
