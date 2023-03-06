import {Button, Typography} from '@mui/material'
import React from 'react'
import {colors} from '../../assets/colors'
import {ButtonSpinner} from './Loader'

export const PrimaryButton = ({
  variant = 'contained',
  text = '',
  onClick = null,
  bgColor = colors.primary.main,
  icon = null,
  customStyle = null,
  textStyles = null,
  isLoading = false,
}) => {
  return (
    (text || icon) && (
      <Button
        variant={variant}
        onClick={onClick}
        sx={{
          ...customStyle,
          backgroundColor: bgColor,
          '&:hover': {
            backgroundColor: colors.primary.hover,
            '.btn-text': {
              color: colors.light.secondary,
            },
          },
        }}
      >
        {icon}{' '}
        <Typography variant="span" className="btn-text" sx={textStyles}>
          {isLoading ? <ButtonSpinner /> : text}
        </Typography>
      </Button>
    )
  )
}
