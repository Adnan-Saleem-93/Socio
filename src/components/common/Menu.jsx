import {IconButton, MenuItem} from '@mui/material'
import {useState} from 'react'
import {colors} from '../../assets/colors'
import {Icons} from '../../utils/constants'
import IconifyIcon from './Iconify-Icon'

const Menu = ({icon = Icons.MENU_HORIZONTAL, text = null, color = colors.light.main}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton onClick={handleClick} aria-label="Delete Post" title="Delete Post">
        <IconifyIcon icon={icon} color={color} />
      </IconButton>
      <Menu
        id="post-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Menu
