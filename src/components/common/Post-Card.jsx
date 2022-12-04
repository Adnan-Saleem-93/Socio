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

const PostCard = ({title = '', description = '', image = null, author = null, date = null}) => {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: colors.primary.main}} aria-label="post-card">
            {author.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <IconifyIcon icon="carbon:overflow-menu-vertical" />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="194" image={image} alt="post" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <IconifyIcon icon="mdi:cards-heart" />
        </IconButton>
        <IconButton aria-label="share">
          <IconifyIcon icon="material-symbols:share" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
