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
import moment from 'moment'
import {Icons} from '../../utils/constants'

const styles = {
  card: {
    boxShadow: 'none !important',
    border: `1px solid ${colors.error.main}`,
    maxWidth: 345
  },
  avatar: {backgroundColor: colors.primary.main, width: 40, height: 40},
  icon: {width: 40, height: 40, color: colors.dark.main},
  description: {color: colors.dark.main},
  actions: {paddingTop: 0}
}

const PostCard = ({
  title = '',
  message = '',
  selectedFile = null,
  author = null,
  createdAt = null
}) => {
  return (
    <Card sx={{...styles.card}}>
      <CardHeader
        avatar={
          author ? (
            <Avatar sx={{...styles.avatar}} aria-label="post-card">
              {author.substring(0, 1)}
            </Avatar>
          ) : (
            <IconifyIcon icon={Icons.AVATAR} style={{...styles.icon}} />
          )
        }
        action={
          <IconButton aria-label="settings">
            <IconifyIcon icon={Icons.MENU} />
          </IconButton>
        }
        title={title}
        subheader={moment(createdAt).format('MMMM DD, YYYY')}
      />
      <CardMedia component="img" height="250" image={selectedFile} alt="post" />
      <CardContent sx={{paddingBottom: 1}}>
        <Typography variant="subtitle1" sx={{...styles.description}}>
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{...styles.actions}}>
        <IconButton aria-label="add to favorites" title="Add To Favorites">
          <IconifyIcon icon={Icons.LIKE} />
        </IconButton>
        <IconButton aria-label="share" title="Share">
          <IconifyIcon icon={Icons.SHARE} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
