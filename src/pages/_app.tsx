import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import type { AppProps } from 'next/app'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useRouter } from 'next/router'
import { request } from '@/utils/network'
// import { message } from 'antd'
import { useEffect, useState } from 'react'

const drawerWidth = 240;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [storyList, setStoryList] = useState<{id: number, title:string}[]>([])
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { id } = router.query;

  useEffect(() => {
    request("/api/story", "GET")
      .then((response) => {
        const newStories = response.data.stories;
        setStoryList(newStories);
      })
      .catch(() => {
        // message.error("获取故事列表失败，请稍后重试")
      })
      .finally(() => {setLoading(false);})
  }, [refresh])

  return (
    <>
      <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Co-Play
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {/* ['故事示例1', '故事示例2', '故事示例3', '故事示例4', '故事示例5', '故事示例6', '故事示例7', '故事示例8', '故事示例9', '故事示例10', '故事示例11', '故事示例12', '故事示例13', '故事示例14', '故事示例15' ] */}
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {storyList.map((story, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => {
                  router.push(`/${story.id}`);
                }}>
                  <ListItemIcon>
                    <ArticleOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary={story.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
        <Toolbar />
        <Component {...pageProps} refresh={refresh} setRefresh={setRefresh}/>
      </Box>
    </Box>
    </>
  )
}