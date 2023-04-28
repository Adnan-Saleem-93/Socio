import {Fab} from '@mui/material'
import IconifyIcon from './Iconify-Icon'
import {colors} from '../../assets/colors'
import {Icons} from '../../utils/constants'

const ChatButton = () => {
  return (
    <Fab
      title="Chat"
      color="primary"
      aria-label="chat"
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }}
    >
      <IconifyIcon icon={Icons.CHAT} color={colors.light.main} />
    </Fab>
  )
}

const ChatSection = () => {
  return <ChatButton />
}

export default ChatSection
