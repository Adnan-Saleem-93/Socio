import {Box} from '@mui/material'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DataNotFound from '../../components/common/Data-Not-Found'
import Loader from '../../components/common/Loader'
import PostCard from '../../components/common/Post-Card'
import {getPosts} from '../../store/reducers/posts'

const Posts = () => {
  const {posts} = useSelector((state) => state.posts)
  const {isLoading} = useSelector((state) => state.posts)
  const dispatchAction = useDispatch()

  useEffect(() => {
    dispatchAction(getPosts())

    return () => {}
  }, [dispatchAction])

  const renderPostCards = () => {
    if (!posts?.length) {
      return <DataNotFound />
    }
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {posts?.map((post, index) => {
          return <PostCard {...post} key={`post-card-${index + 1}`} />
        })}
      </Box>
    )
  }
  return <>{isLoading ? <Loader size={80} /> : renderPostCards()}</>
}

export default Posts
