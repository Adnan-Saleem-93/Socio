import {css} from '@emotion/react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {useState} from 'react'
import {MenuNames, MenuButtons, Genders} from '../../utils/constants'

import {Typography} from '@mui/material'
import {colors} from './../../assets/colors'
import IconifyIcon from './Iconify-Icon'

const styles = {
  button: {},
  buttonText: {
    color: colors.dark.main
  },
  menuItem: {
    padding: '0.5rem 1rem',
    margin: '0.5rem'
  },
  profileAvatar: {
    marginRight: '0.5rem'
  }
}

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

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
      icon: 'carbon:settings'
    },
    {
      text: 'Log Out',
      style: styles.menuItem,
      onClick: handleClose,
      icon: 'carbon:logout'
    }
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
        <IconifyIcon icon="carbon:user-avatar-filled-alt" style={styles.profileAvatar} />
        <Typography sx={styles.buttonText}>{MenuButtons.ProfileMenu.TEXT}</Typography>
      </Button>
      <Menu
        id={MenuNames.PROFILE_MENU}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': MenuButtons.ProfileMenu.TEXT
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: colors.background.main
          }
        }}
      >
        {menuItems.map((item, index) => {
          const {text, onClick, style, icon} = item
          return (
            <MenuItem
              onClick={onClick}
              sx={style}
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
