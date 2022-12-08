import {Button} from '@mui/material'
import React from 'react'
import {colors} from '../../assets/colors'

export const PrimaryButton = ({
  variant = 'contained',
  text = '',
  onClick = null,
  bgColor = colors.primary.main,
  icon = null
}) => {
  return (
    (text || icon) && (
      <Button
        variant={variant}
        onClick={onClick}
        sx={{
          backgroundColor: bgColor,
          '&:hover': {
            backgroundColor: colors.primary.hover
          }
        }}
      >
        {icon} {text}
      </Button>
    )
  )
}
