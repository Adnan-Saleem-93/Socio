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
            '.btn-text, .iconify': {
              color: `${customStyle?.hoverTextColor || colors.light.main} !important`,
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
