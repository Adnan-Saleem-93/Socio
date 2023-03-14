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
          boxShadow: 'none !important',
          backgroundColor: bgColor,
          '&:hover': {
            backgroundColor: customStyle?.hoverColor || colors.primary.hover,
            '.btn-text': {
              color: customStyle.hoverTextColor || colors.light.secondary,
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
