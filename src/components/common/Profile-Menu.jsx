import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {useState} from 'react'
import {MenuNames, MenuButtons, Icons} from '../../utils/constants'

import {Typography} from '@mui/material'
import {colors} from './../../assets/colors'
import IconifyIcon from './Iconify-Icon'
import {useDispatch} from 'react-redux'
import {logOut} from '../../store/reducers/auth'

const styles = {
  button: {},
  buttonText: {
    color: colors.dark.main,
  },
  menuItem: {
    padding: '0.5rem 1rem',
    margin: '0.5rem',
  },
  profileAvatar: {
    marginRight: '0.5rem',
  },
}

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const dispatchAction = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuItems = [
    {
      text: 'My Account',
      style: styles.menuItem,
      onClick: handleClose,
      icon: Icons.SETTINGS,
    },
    {
      text: 'Log Out',
      style: styles.menuItem,
      onClick: () => dispatchAction(logOut()),
      icon: Icons.LOG_OUT,
    },
  ]

  return (
    <div style={{float: 'right'}}>
      <Button
        id={MenuButtons.ProfileMenu.ID}
        aria-controls={open ? MenuNames.PROFILE_MENU : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconifyIcon icon={Icons.AVATAR_ALT} style={styles.profileAvatar} />
        <Typography sx={styles.buttonText}>{MenuButtons.ProfileMenu.TEXT}</Typography>
      </Button>
      <Menu
        id={MenuNames.PROFILE_MENU}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': MenuButtons.ProfileMenu.TEXT,
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: colors.light.main,
            border: `1px solid ${colors.primary.main}`,
          },
        }}
      >
        {menuItems.map((item, index) => {
          const {text, onClick, style, icon} = item
          return (
            <MenuItem
              onClick={onClick}
              sx={{
                ...style,
                '&.MuiMenuItem-root:hover': {
                  backgroundColor: `${colors.primary.main} !important`,
                  borderRadius: 1,
                  color: colors.light.main,
                  '& .iconify': {
                    color: `${colors.light.main} !important`,
                  },
                },
              }}
              key={`${MenuNames.PROFILE_MENU}-item-${index + 1}`}
            >
              <IconifyIcon icon={icon} style={styles.profileAvatar} />
              {text}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
