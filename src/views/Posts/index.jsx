import {Box} from '@mui/material'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {colors} from '../../assets/colors'
import {PrimaryButton} from '../../components/common/Buttons'
import DataNotFound from '../../components/common/Data-Not-Found'
import IconifyIcon from '../../components/common/Iconify-Icon'
import Loader from '../../components/common/Loader'
import PageHeader from '../../components/common/Page-Header'
import PostCard from '../../components/common/Post-Card'
import BasicLayout from '../../components/layouts/BasicLayout'
import {getPosts} from '../../store/reducers/posts'
import {Icons} from '../../utils/constants'

const Posts = () => {
  const {posts} = useSelector((state) => state.posts)
  const {isLoading} = useSelector((state) => state.posts)
  const dispatchAction = useDispatch()

  useEffect(() => {
    dispatchAction(getPosts())

    return () => {}
  }, [])

  const renderPostCards = () => {
    if (!posts?.length) {
      return <DataNotFound />
    }
    return posts?.map((post, index) => {
      return <PostCard {...post} key={`post-card-${index + 1}`} />
    })
  }
  return (
    <BasicLayout>
      <PageHeader
        text="Posts"
        button={
          <PrimaryButton
            icon={<IconifyIcon icon={Icons.ADD} color={colors.light.main} />}
            text="Create New Post"
          />
        }
      />
      {isLoading ? <Loader size={80} /> : <Box sx={{marginTop: 2}}>{renderPostCards()}</Box>}
    </BasicLayout>
  )
}

export default Posts
