"use client"
import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Image from "next/image";
import { LogoutModal } from "../logout";
import { Tabs, Tab, Box } from '@mui/material';
import { useRouter } from "next/router";

const SideBar: NextPage = () => {
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);

  const openLogOutModal = useCallback(() => {
    setLogOutModalOpen(true);
  }, []);

  const closeLogOutModal = useCallback(() => {
    setLogOutModalOpen(false);
  }, []);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    if(newValue === 2) openLogOutModal(); 
  };

  return (
    <>
      <nav className="bg-m3-sys-light-on-primary w-24 h-screen text-left text-sm text-cornflowerblue-100 font-lalezar mr-32 flex-shrink-0">
        <div className="h-full w-56 border-r border-cornflowerblue-200 backdrop-blur-md flex flex-col [backdrop-filter:blur(500px)]  [background:linear-gradient(#f5f5f5,_#f5f5f5),_#fff]">
          <div className="flex items-end justify-start py-3 px-1 gap-2.5 border-b border-gold-100">
            <Image
              className="w-10 h-10 object-cover"
              alt="DHIS2 icon"
              src="/analyticsmessenger-11@2x.png"
              width={40}
              height={40}
            />
            <div>
              <p className="m-0 font-bold">DHIS2</p>
              <p className="m-0 font-bold">Analytics Messenger</p>
            </div>
          </div>
            <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          orientation="vertical" 
          variant="standard"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            width: '14rem',
            '& .MuiTabs-indicator': {
              left: 0,
              right: 'auto',
              width: '4px',
              backgroundColor: 'cornflowerblue-100',
              transition: 'none'
            }
          }}
        >
          <Tab 
    icon={
      <div className="flex items-center gap-2.5 justify-start">
        <Image className="w-6 h-6" alt="" src="/precision-manufacturing.svg" width={24} height={24} />
        <span>Management</span>
      </div>
    }  sx={{
      justifyContent: 'flex-start', 
      '&.Mui-selected': {
        backgroundColor: 'rgba(0, 142, 221, 0.25)'
      },textTransform: 'none'
    }}
  />
  <Tab 
    icon={
      <div className="flex items-center gap-2.5 justify-start">
        <Image className="w-6 h-6" alt="" src="/person.svg" width={24} height={24} />
        <span>Account</span>
      </div>
    }  sx={{
      justifyContent: 'flex-start', 
      '&.Mui-selected': {
        backgroundColor: 'rgba(0, 142, 221, 0.25)'
      },textTransform: 'none'
    }}
  />
  <Tab 
    icon={
      <div className="flex items-center gap-2.5 justify-start">
        <Image className="w-6 h-6" alt="" src="/logout.svg" width={24} height={24} />
        <span>Logout</span>
      </div>
    } sx={{
      justifyContent: 'flex-start', 
      '&.Mui-selected': {
        backgroundColor: 'rgba(0, 142, 221, 0.25)'
      },textTransform: 'none'
    }}
    onClick={openLogOutModal}
  /> </Tabs>
      </Box>
        </div>
      </nav>
      {isLogOutModalOpen && (
        <LogoutModal open={isLogOutModalOpen} onClose={closeLogOutModal} />
      )}
    </>
  );
};

export default SideBar;
