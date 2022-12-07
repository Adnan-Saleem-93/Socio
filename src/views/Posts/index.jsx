import {Box} from '@mui/material'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PageHeader from '../../components/common/Page-Header'
import PostCard from '../../components/common/Post-Card'
import BasicLayout from '../../components/layouts/BasicLayout'
import {getPosts} from '../../store/reducers/posts'

const Posts = () => {
  const {posts} = useSelector((state) => state.posts)
  const dispatchAction = useDispatch()

  useEffect(() => {
    dispatchAction(getPosts())

    return () => {}
  }, [])

  const renderPostCards = () => {
    return posts?.map((post, index) => {
      return <PostCard {...post} key={`post-card-${index + 1}`} />
    })
  }
  return (
    <BasicLayout>
      <PageHeader text="Posts" />
      <Box sx={{marginTop: 2}}>{renderPostCards()}</Box>
    </BasicLayout>
  )
}

export default Posts
