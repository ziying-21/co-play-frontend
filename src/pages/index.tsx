import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const Home = () => {
  return (
    <>
      <Box sx={{
        display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ bgcolor: blue[600], width: 56, height: 56 }}>
          <ShareOutlinedIcon/>
        </Avatar> 
        <br/>
        <Typography variant="h4" >
          How can I help you today?
        </Typography>
        <br/>
        <div>
          <Button size="large" variant="outlined">Large</Button>
          <Button size="large" variant="outlined">Large</Button>
        </div>
        <div>
          <Button size="large" variant="outlined">Large</Button>
          <Button size="large" variant="outlined">Large</Button>
        </div>
        <div>
          
        </div>
      </Box>
    </>
  );
}

export default Home