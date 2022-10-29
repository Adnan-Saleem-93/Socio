import {css} from '@emotion/react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {useState} from 'react'
import {MenuNames, MenuButtons} from '../../utils/constants'

const styles = {
  button: css``,
  menuItem: css`
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  `
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
      onClick: handleClose
    },
    {
      text: 'Log Out',
      style: styles.menuItem,
      onClick: handleClose
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
        {MenuButtons.ProfileMenu.TEXT}
      </Button>
      <Menu
        id={MenuNames.PROFILE_MENU}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': MenuButtons.ProfileMenu.TEXT
        }}
      >
        {menuItems.map((item, index) => {
          const {text, onClick, style} = item
          return (
            <MenuItem
              onClick={onClick}
              sx={style}
              key={`${MenuNames.PROFILE_MENU}-item-${index + 1}`}
            >
              {text}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
