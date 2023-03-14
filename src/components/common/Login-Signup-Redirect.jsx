import {Button, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../assets/colors'

const LoginSignupRedirect = ({question, btnText, redirectTo}) => {
  const navigate = useNavigate()

  return (
    <Typography
      sx={{
        fontSize: '1rem',
      }}
    >
      {question}{' '}
      <Button
        sx={{
          textDecoration: 'none',
          fontWeight: 700,
          color: colors.primary[500],
          padding: 0,
          '&:hover': {
            color: colors.primary.main,
            background: colors.light.main,
          },
        }}
        onClick={() => navigate(redirectTo)}
      >
        {btnText}
      </Button>
    </Typography>
  )
}

export default LoginSignupRedirect
