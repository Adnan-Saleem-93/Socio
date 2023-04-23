import {Box, Card, CardActions, CardContent, IconButton, Typography} from '@mui/material'
import {colors} from '../../assets/colors'
import IconifyIcon from './Iconify-Icon'
import moment from 'moment'
import {Icons} from '../../utils/constants'
import postStyles from '../../assets/custom-css/post.module.css'

const styles = {
  card: {
    boxShadow: 'none !important',
    border: `1px solid ${colors.dark.main}`,
    minWidth: '90%',
    maxWidth: '90%',
    margin: 1,
  },
  avatar: {backgroundColor: colors.primary.main, width: 40, height: 40},
  icon: {width: 40, height: 40, color: colors.dark.main},
  description: {color: colors.dark.main},
}

const TimeStamp = ({createdAt}) => {
  let diff = moment().diff(moment(createdAt), 'days')
  let time = diff > 1 ? moment(createdAt).format('MMM DD, YYYY') : moment(createdAt).fromNow()
  return (
    <Typography variant="h6" fontWeight={800} className={postStyles.date}>
      {time}
    </Typography>
  )
}

const Content = ({createdAt = null, author = '', message = ''}) => {
  const renderMessage = () => {
    if (message.length >= 30) {
      return message.substring(0, 29)
    }
    return message
  }
  return (
    <CardContent sx={{padding: 0}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant="h6" fontWeight={800} className={postStyles.header}>
          {author}
        </Typography>
        <TimeStamp createdAt={createdAt} />
      </Box>
      <Typography variant="subtitle1" sx={{...styles.description}}>
        {renderMessage()}
      </Typography>
    </CardContent>
  )
}

const Actions = ({likes}) => {
  return (
    <CardActions disableSpacing sx={{padding: 0, justifyContent: 'space-between'}}>
      <IconButton aria-label="like-post" title="Like Post">
        <IconifyIcon icon={Icons.LIKE} color={colors.primary.main} />
        <Typography variant="subtitle1" sx={{...styles.description, marginLeft: 0.5}}>
          {likes}
        </Typography>
      </IconButton>

      <IconButton aria-label="delete-post" title="Delete Post">
        <IconifyIcon icon={Icons.DELETE} color={colors.error.main} />
      </IconButton>
    </CardActions>
  )
}

const PostCard = ({
  message = '',
  selectedFile = null,
  author = null,
  createdAt = null,
  likes = 0,
}) => {
  return (
    <Card sx={{...styles.card}}>
      {selectedFile && (
        <img className={postStyles.image} height="250" src={selectedFile} alt="background" />
      )}

      <Box sx={{padding: 1.5}}>
        <Content createdAt={createdAt} author={author} message={message} />

        <Actions likes={likes} />
      </Box>
    </Card>
  )
}

export default PostCard
