import {Card, CardActions, CardContent, IconButton, Typography} from '@mui/material'
import {colors} from '../../assets/colors'
import IconifyIcon from './Iconify-Icon'
import moment from 'moment'
import {Icons} from '../../utils/constants'
import postStyles from '../../assets/custom-css/post.module.css'
import Menu from './Menu'

const styles = {
  card: {
    boxShadow: 'none !important',
    border: `1px solid ${colors.error.main}`,
    maxWidth: 345,
  },
  avatar: {backgroundColor: colors.primary.main, width: 40, height: 40},
  icon: {width: 40, height: 40, color: colors.dark.main},
  description: {color: colors.dark.main},
  actions: {padding: 0},
}

const PostCard = ({
  title = '',
  message = '',
  selectedFile = null,
  author = null,
  createdAt = null,
  likes = 0,
}) => {
  const renderMessage = () => {
    if (message.length >= 30) {
      return message.substring(0, 29)
    }
    return message
  }

  return (
    <Card sx={{...styles.card}}>
      <article className={postStyles.article}>
        <img className={postStyles.image} height="250" src={selectedFile} alt="background" />

        <Typography variant="h6" fontWeight={800} className={postStyles.header}>
          {author}
        </Typography>
        <Typography variant="h6" fontWeight={800} className={postStyles.date}>
          {moment(createdAt).format('MMM DD, YYYY hh:mm A')}
        </Typography>
        <Menu />
      </article>
      <CardContent sx={{padding: 1, paddingBottom: 0}}>
        <Typography variant="h6" fontWeight={800} sx={{...styles.description}}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{...styles.description}}>
          {renderMessage()}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{...styles.actions}}>
        <IconButton aria-label="add to favorites" title="Add To Favorites">
          <IconifyIcon icon={Icons.LIKE} color={colors.error.main} />
        </IconButton>
        <Typography
          variant="subtitle1"
          sx={{...styles.description, marginLeft: likes.toString().length > 1 ? 0 : -1}}
        >
          {likes}
        </Typography>
        <IconButton aria-label="Delete Post" title="Delete Post">
          <IconifyIcon icon={Icons.DELETE} color={colors.error.main} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
