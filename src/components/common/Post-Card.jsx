import {Box, Card, CardActions, CardContent, IconButton, Tooltip, Typography} from '@mui/material'
import {colors} from '../../assets/colors'
import IconifyIcon from './Iconify-Icon'
import moment from 'moment'
import {Icons} from '../../utils/constants'
import postStyles from '../../assets/custom-css/post.module.css'
// import {useSelector} from 'react-redux'

const styles = {
  card: {
    boxShadow: 'none !important',
    border: `1px solid ${colors.error.main}`,
    minWidth: '100%',
    margin: 1,
  },
  avatar: {backgroundColor: colors.primary.main, width: 40, height: 40},
  icon: {width: 40, height: 40, color: colors.dark.main},
  description: {color: colors.dark.main},
  actions: {padding: 0},
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
    <CardContent sx={{padding: 1, paddingBottom: 0}}>
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

const PostCard = ({
  title = '',
  message = '',
  selectedFile = null,
  author = null,
  createdAt = null,
  likes = 0,
}) => {
  // const {googleAuthToken} = useSelector((state) => state.auth)

  return (
    <Card sx={{...styles.card}}>
      {selectedFile && (
        <img className={postStyles.image} height="250" src={selectedFile} alt="background" />
      )}

      <Content createdAt={createdAt} author={author} message={message} />

      <CardActions disableSpacing sx={{...styles.actions, justifyContent: 'space-between'}}>
        <Tooltip
          title="Like Post"
          arrow
          placement="top"
          sx={{
            '& .MuiTooltip-tooltip': {
              backgroundColor: `${colors.dark.main} !important`,
            },
          }}
        >
          <IconButton aria-label="like-post">
            <IconifyIcon icon={Icons.LIKE} color={colors.primary.main} />
            <Typography variant="subtitle1" sx={{...styles.description, marginLeft: 0.5}}>
              {likes}
            </Typography>
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Post" arrow placement="top">
          <IconButton aria-label="Delete Post">
            <IconifyIcon icon={Icons.DELETE} color={colors.error.main} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}

export default PostCard
