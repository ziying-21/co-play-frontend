import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <Box sx={{
      height: "100%"
    }}>
      <Grid 
      sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '100%',
        }}
        marginTop={{xs: 2, sm: 5}}
        container
        rowSpacing={{ xs: 4, sm: 6 }}
        columnSpacing={{ xs: 3, sm: 6 }}
      >  
        <Grid item xs={12}>
          <Avatar sx={{ bgcolor: blue[600], width: 56, height: 56 }}>
            <ShareOutlinedIcon/>
          </Avatar> 
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" >
            How can I help you create a story today?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container columnSpacing={2}>
            <Grid item>
            <Button size="large" variant="outlined">故事示例1</Button>
            </Grid>
            <Grid item>
            <Button size="large" variant="outlined">故事示例2</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container columnSpacing={2}>
            <Grid item>
            <Button size="large" variant="outlined">故事示例3</Button>
            </Grid>
            <Grid item>
            <Button size="large" variant="outlined">故事示例4</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button size="large" variant="contained"> Create a new story </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home