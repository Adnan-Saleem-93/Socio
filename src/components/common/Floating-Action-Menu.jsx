import {Box, Fab} from '@mui/material'

import {fabStyle} from './../../styles'
import AddIcon from '@mui/icons-material/Add'

export default function FloatingActionButtonZoom() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        height: '100vh'
      }}
    >
      <Fab sx={fabStyle} aria-label="Add" color="primary">
        <AddIcon />
      </Fab>
    </Box>
  )
}
