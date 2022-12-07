import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import {colors} from '../../assets/colors'
import IconifyIcon from './Iconify-Icon'

const PostCard = ({title = '', message = '', selectedFile = null, author = null, date = null}) => {
  return (
    <Card
      sx={{boxShadow: 'none !important', border: `1px solid ${colors.primary.main}`, maxWidth: 345}}
    >
      <CardHeader
        avatar={
          author ? (
            <Avatar
              sx={{bgcolor: colors.primary.main, width: 40, height: 40}}
              aria-label="post-card"
            >
              {author.substring(0, 1)}
            </Avatar>
          ) : (
            <IconifyIcon
              icon="carbon:user-avatar-filled"
              style={{width: 40, height: 40, color: colors.dark.main}}
            />
          )
        }
        action={
          <IconButton aria-label="settings">
            <IconifyIcon icon="carbon:overflow-menu-vertical" />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="250" image={selectedFile} alt="post" />
      <CardContent sx={{paddingBottom: 1}}>
        <Typography variant="subtitle1" sx={{color: colors.dark.main}}>
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{paddingTop: 0}}>
        <IconButton aria-label="add to favorites" title="Add To Favorites">
          <IconifyIcon icon="mdi:cards-heart" />
        </IconButton>
        <IconButton aria-label="share" title="Share">
          <IconifyIcon icon="material-symbols:share" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
