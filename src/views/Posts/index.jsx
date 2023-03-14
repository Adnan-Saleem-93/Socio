import {Box} from '@mui/material'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../assets/colors'
import {PrimaryButton} from '../../components/common/Buttons'
import DataNotFound from '../../components/common/Data-Not-Found'
import IconifyIcon from '../../components/common/Iconify-Icon'
import Loader from '../../components/common/Loader'
import PageHeader from '../../components/common/Header'
import PostCard from '../../components/common/Post-Card'
import {getPosts} from '../../store/reducers/posts'
import {Icons} from '../../utils/constants'

const Posts = () => {
  const {posts} = useSelector((state) => state.posts)
  const {isLoading} = useSelector((state) => state.posts)
  const dispatchAction = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatchAction(getPosts())

    return () => {}
  }, [])

  const renderPostCards = () => {
    if (!posts?.length) {
      return <DataNotFound />
    }
    return (
      <Box sx={{marginTop: 2}}>
        {posts?.map((post, index) => {
          return <PostCard {...post} key={`post-card-${index + 1}`} />
        })}
      </Box>
    )
  }
  return (
    <>
      <PageHeader
        text="Posts"
        button={
          <PrimaryButton
            icon={<IconifyIcon icon={Icons.ADD} color={colors.light.main} />}
            text="New Post"
            onClick={() => navigate('/create-post')}
          />
        }
      />
      {isLoading ? <Loader size={80} /> : renderPostCards()}
    </>
  )
}

export default Posts
