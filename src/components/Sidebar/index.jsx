import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import SettingsIcon from '@mui/icons-material/Settings'
import {useState} from 'react'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import {Box} from '@mui/material'
import {styled} from '@mui/material/styles'
import {colors} from '../../assets/colors'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
)

const AppBarComponent = ({open = true}) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        background: colors.light.main,
        boxShadow: 'none',
        borderBottom: `1px solid #0000001f`,
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{color: colors.primary.main, fontWeight: 700}}
        >
          Posts
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const Header = () => {
  return (
    <DrawerHeader sx={{justifyContent: 'center'}}>
      <Typography variant="h4" component="div">
        Socio
      </Typography>
    </DrawerHeader>
  )
}

const PostListItemsSection = () => {
  const items = [
    {
      key: 1,
      text: 'Create New Post',
      icon: <AddIcon />,
    },
    {
      key: 2,
      text: 'Posts',
      icon: <RecentActorsIcon />,
    },
  ]

  return (
    <List>
      {items.map((item) => {
        const {key, text, icon} = item
        return (
          <ListItem key={item.key} disablePadding sx={{display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
                '&:hover, &:hover .MuiListItemIcon-root': {
                  ...(key === 1 && {
                    backgroundColor: colors.primary.main,
                    color: colors.light.main,
                    fontWeight: 800,
                  }),
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: 'center',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  '& .MuiTypography-root': {
                    ...(key === 1 && {
                      fontWeight: 900,
                    }),
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

const AccountListItemsSection = ({open = true}) => {
  const items = [
    {
      key: 1,
      text: 'Profile Settings',
      icon: <SettingsIcon />,
    },
    {
      key: 2,
      text: 'Log Out',
      icon: <RecentActorsIcon />,
    },
  ]
  return (
    <List>
      {items.map((item) => {
        const {key, text, icon} = item
        return (
          <ListItem key={key} disablePadding sx={{display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: 'center',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} sx={{}} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

const Sidebar = () => {
  const [open] = useState(true)

  return (
    <>
      <AppBarComponent />
      <Drawer variant="permanent" open={open}>
        <Header />
        <Box display="flex" justifyContent="space-between" flexDirection="column" height="100vh">
          <PostListItemsSection />
          <AccountListItemsSection />
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
