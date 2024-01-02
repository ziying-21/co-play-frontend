import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Dispatch, SetStateAction, useState } from 'react';
import CreateStory from '@/components/CreatStory';
import { Divider } from '@mui/material';

interface HomeProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const Home = (props: HomeProps) => {
  const [createStoryDialogOpen, setCreateStoryDialogOpen] = useState(false);
  const [createMode, setCreateMode] = useState(true);
  return (
    <>
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
          marginTop={{ xs: 2, sm: 5 }}
          container
          rowSpacing={{ xs: 4, sm: 6 }}
          columnSpacing={{ xs: 3, sm: 6 }}
        >
          <Grid item xs={12}>
            <Avatar sx={{ bgcolor: blue[600], width: 56, height: 56 }}>
              <ShareOutlinedIcon />
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
                <Button size="large" variant="outlined">从前有座山，山上有座庙...</Button>
              </Grid>
              <Grid item>
                <Button size="large" variant="outlined">很久很久以前...</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container columnSpacing={2}>
              <Grid item>
                <Button size="large" variant="outlined">小蝌蚪找妈妈...</Button>
              </Grid>
              <Grid item>
                <Button size="large" variant="outlined">汽车行驶在落基山脉...</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container columnSpacing={2}>
              <Grid item>
                <Button size="large" variant="contained"
                  onClick={() => {setCreateStoryDialogOpen(true); setCreateMode(true);}}
                > 创建一个新故事 </Button>
              </Grid>
              <Grid item>
                <Button size="large" variant="contained"
                  onClick={() => {setCreateStoryDialogOpen(true); setCreateMode(false);}}
                > 导入一个故事 </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <CreateStory open={createStoryDialogOpen} setOpen={setCreateStoryDialogOpen} createMode={createMode} refresh={props.refresh} setRefresh={props.setRefresh} />
    </>
  );
}

export default Home