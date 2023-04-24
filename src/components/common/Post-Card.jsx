import {Box, Card, CardActions, CardContent, IconButton, Typography} from '@mui/material'
import {colors} from '../../assets/colors'
import IconifyIcon from './Iconify-Icon'
import moment from 'moment'
import {Icons} from '../../utils/constants'
import postStyles from '../../assets/custom-css/post.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {parseJWT} from '../../utils/general-methods'
import {useMemo} from 'react'
import {handleDeleteClick, handleLikeClick} from '../../views/Posts/model'

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
        <Typography variant="h6" fontWeight={800} fontSize="1rem" className={postStyles.author}>
          {author || 'Anonymous'}
        </Typography>
        <TimeStamp createdAt={createdAt} />
      </Box>
      <Typography variant="subtitle1" sx={{...styles.description}}>
        {renderMessage()}
      </Typography>
    </CardContent>
  )
}

const Actions = ({likes, id, author = ''}) => {
  const {token} = useSelector((state) => state.auth)
  const decodedToken = useMemo(() => parseJWT(token), [token])

  const dispatchAction = useDispatch()

  return (
    <CardActions disableSpacing sx={{padding: 0, justifyContent: 'space-between'}}>
      <IconButton
        aria-label="like-post"
        title="Like Post"
        onClick={() => {
          handleLikeClick({id, likedBy: decodedToken?.id, dispatchAction})
        }}
      >
        <IconifyIcon icon={Icons.LIKE} color={colors.primary.main} />
        <Typography variant="subtitle1" sx={{...styles.description, marginLeft: 0.5}}>
          {likes}
        </Typography>
      </IconButton>

      {decodedToken?.name === author && (
        <Box>
          <IconButton aria-label="edit-post" title="Edit Post" onClick={handleDeleteClick}>
            <IconifyIcon icon={Icons.EDIT} color={colors.primary.hover} />
          </IconButton>
          <IconButton
            aria-label="delete-post"
            title="Delete Post"
            onClick={() => handleDeleteClick(id, dispatchAction)}
          >
            <IconifyIcon icon={Icons.DELETE} color={colors.error.main} />
          </IconButton>
        </Box>
      )}
    </CardActions>
  )
}

const PostCard = ({
  message = '',
  selectedFile = null,
  author = null,
  createdAt = null,
  likes = 0,
  _id = null,
}) => {
  return (
    <Card sx={{...styles.card}}>
      {selectedFile && (
        <img className={postStyles.image} height="250" src={selectedFile} alt="background" />
      )}

      <Box sx={{padding: 1.5}}>
        <Content createdAt={createdAt} author={author} message={message} />
        <Actions likes={likes} id={_id} author={author} />
      </Box>
    </Card>
  )
}

export default PostCard
