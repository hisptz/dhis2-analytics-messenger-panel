import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import Image from 'next/image';

const DHIS2StatusCard: React.FC = () => {
  return (
    <Card className=" m-4 bg-pink-100 rounded-lg shadow-md">
      <CardContent className="flex items-center space-x-4 p-4">
        
        <Image src="/group-5.svg" alt="Icon" width={45} height={45} className="w-16 h-16 rounded-full bg-gray-200" />
        
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <Typography variant="body1" className="text-black">
              Name: RHMCAH Tanzania
            </Typography>
          </div>

          <Typography variant="body1" className="text-black">
            DHIS2: <a href="https://rmncah.org.tz" className="text-blue-500 underline">https://rmncah.org.tz</a>
          </Typography>

          <div className="flex items-center space-x-2">
            <WifiOffIcon color="error" />
            <Typography variant="body2" className="text-red-600">
              Status: Offline
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DHIS2StatusCard;
