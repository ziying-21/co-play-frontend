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

const drawerWidth = 240;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
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
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => {
                  router.push(`/${index}`);
                }}>
                  <ListItemIcon>
                    <ArticleOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
    </>
  )
}