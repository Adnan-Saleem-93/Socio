import {useState} from 'react'

// material icons
import AddIcon from '@mui/icons-material/Add'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import SettingsIcon from '@mui/icons-material/Settings'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import MuiDrawer from '@mui/material/Drawer'

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import {styled} from '@mui/material/styles'
import {colors} from '../../assets/colors'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logOut} from '../../store/reducers/auth'

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
  const navigate = useNavigate()
  const items = [
    {
      key: 1,
      text: 'Create New Post',
      icon: <AddIcon />,
      clickEvent: () => navigate('/create-post'),
    },
    {
      key: 2,
      text: 'Posts',
      icon: <RecentActorsIcon />,
      clickEvent: () => navigate('/posts'),
    },
  ]

  return (
    <List>
      {items.map((item) => {
        const {key, text, icon, clickEvent} = item
        return (
          <ListItem key={key} disablePadding sx={{display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
                ...(key === 1 && {
                  color: colors.primary.main,
                }),
                '&:hover, &:hover .MuiListItemIcon-root': {
                  ...(key === 1 && {
                    backgroundColor: colors.primary.main,
                    color: colors.light.main,
                    fontWeight: 800,
                  }),
                },
              }}
              onClick={clickEvent}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: 'center',
                  ...(key === 1 && {
                    color: colors.primary.main,
                  }),
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

const AccountListItemsSection = () => {
  const navigate = useNavigate()
  const dispatchAction = useDispatch()
  const items = [
    {
      key: 1,
      text: 'Profile Settings',
      icon: <SettingsIcon />,
      clickEvent: () => navigate('/profile-settings'),
    },
    {
      key: 2,
      text: 'Log Out',
      icon: <PowerSettingsNewIcon />,
      clickEvent: () => dispatchAction(logOut()),
    },
  ]
  return (
    <List>
      {items.map((item) => {
        const {key, text, icon, clickEvent} = item
        return (
          <ListItem key={key} disablePadding sx={{display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
              }}
              onClick={clickEvent}
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
